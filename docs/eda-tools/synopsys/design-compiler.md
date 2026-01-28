# Design Compiler 使用指南

## 简介

Design Compiler (DC) 是 Synopsys 的逻辑综合工具，将 RTL 代码转换为门级网表。

## 基本工作流程

### 1. 读取设计文件

```tcl
# 读取Verilog设计
read_verilog top.v

# 读取约束文件
read_sdc constraints.sdc

# 读取标准单元库
read_lib standard_cell_library.db
```

### 2. 设置环境

```tcl
# 设置工作目录
define_design_lib WORK -path ./WORK

# 设置链接库
define_design_lib LINK -path ./LINK

# 设置目标库
set_target_library standard_cell_library.db

# 设置工作版本
set_host_library standard_cell_library.db

# 设置线负载
set_load_library {unit:pf}
```

### 3. 综合设计

```tcl
# 设置优化约束
set_max_area 0
set_max_delay 2.5

# 运行综合
compile
```

### 4. 分析结果

```tcl
# 报告面积
report_area > area_report.rpt

# 报告时序
report_timing > timing_report.rpt

# 报告功耗
report_power > power_report.rpt

# 报告约束
report_constraints > constraints_report.rpt

# 报告资源
report_resources > resources_report.rpt
```

## 优化技巧

### 面积优化
```tcl
# 设置面积约束
set_max_area 10000

# 使用面积优化
compile_ultra -area_effort high

# 关键单元映射
map_effort high
```

### 时序优化
```tcl
# 设置时钟周期
create_clock -period 10 -name clk

# 设置输入延迟
set_input_delay -max 0.5 [all_inputs]

# 设置输出延迟
set_output_delay -max 0.5 [all_outputs]

# 使用时序驱动的综合
compile -timing_high_effort_script
```

### 功耗优化
```tcl
# 设置编译单位
set_leakage_power true
set_dynamic_power true

# 低功耗综合
compile -power_effort high
```

## 常见问题

### Q1: 综合失败？

**可能原因**：
- 约束冲突
- 时钟定义错误
- 库文件不匹配

**解决方法**：
```tcl
# 检查约束
check_design

# 验证库
check_library

# 修复错误后重新综合
compile -incremental
```

### Q2: 面积超出预算？

**解决方法**：
```tcl
# 调整面积约束
set_max_area 5000

# 或使用更小的单元
set_max_transition_time 0.2
```

:::tip 最佳实践
- 在综合前先进行完整的代码检查
- 使用统一的命名规范
- 添加充分的注释
- 分层约束便于调试
:::

## 下一步

综合后：
1. 运行 PrimeTime 进行静态时序分析
2. 使用 IC Compiler 进行布局布线
3. 运行 DRC/LVS 验证

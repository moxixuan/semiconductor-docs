# 时序分析

## 什么是时序分析？

时序分析（Static Timing Analysis, STA）是验证数字电路时序性能的关键步骤。

## 关键概念

### 1. 建立时间（Setup Time）
数据必须在时钟沿之前最少稳定的时间。

```
T_setup = T_clock - T_propagation - T_hold
```

### 2. 保持时间（Hold Time）
数据必须在时钟沿之后最少保持稳定的时间。

### 3. 时钟偏斜（Clock Skew)
不同寄存器看到的时钟沿的时间差。

### 4. 关键路径（Critical Path）
电路中延迟最长的路径，决定最大工作频率。

## 时序分析步骤

### 使用PrimeTime进行时序分析

```tcl
# 1. 读取设计
read_verilog design.v
read_lib library.lib

# 2. 设置约束
create_clock -name clk -period 10 [get_ports clk]
set_input_delay -clock clk 2.0 [all_inputs]
set_output_delay -clock clk 2.0 [all_outputs]

# 3. 更新时序
update_timing

# 4. 生成报告
report_timing -max_paths 10
```

## 时序优化技巧

1. **流水线设计**：打破组合逻辑路径
2. **时钟门控**：减少功耗
3. **多电压域**：优化性能和功耗
4. **使用更快的库**：性能关键路径

:::tip 工具推荐
- Synopsys PrimeTime
- Cadence Tempus
- OpenSTA（开源）
:::

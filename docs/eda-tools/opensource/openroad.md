# OpenROAD 开源工具链

## 简介

OpenROAD（OpenROAD, Open DB, OpenSTA）是一个开源的数字IC设计流程工具。

## 主要特点

- ✅ 完全开源（BSD许可证）
- ✅ 支持从综合到布线的完整流程
- ✅ 活跃的社区支持
- ✅ 适用于教育和研究

## 工具组件

### 1. OpenDB
- 统一的数据模型
- 支持多种格式输入

### 2. OpenSTA
- 静态时序分析
- 生成时序报告

### 3. TritonRoute
- 详细布线
- 支持多层金属

### 4. OpenDP
- 布局优化
- 密度控制

## 基本使用流程

```bash
# 1. 综合
openroad -no_splash -exit script/01_synth.tcl

# 2. 布局
openroad -no_splash -exit script/02_floorplan.tcl

# 3. 布线
openroad -no_splash -exit script/03_route.tcl

# 4. 时序分析
openroad -no_splash -exit script/04_report.tcl
```

:::tip 适用场景
OpenROAD特别适合：
- 学术研究
- 教学演示
- 小型项目原型验证
- 开源芯片项目
:::

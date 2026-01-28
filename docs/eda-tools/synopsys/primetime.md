---
title: Synopsys PrimeTime 时序分析
sidebar_label: PrimeTime
description: 静态时序分析工具 PrimeTime 使用指南
---

# Synopsys PrimeTime 时序分析

PrimeTime 是 Synopsys 公司的静态时序分析（STA）工具，是芯片设计流程中的核心工具。

## 什么是时序分析？

时序分析用于验证数字电路是否满足时序约束要求，包括：
- 建立时间检查
- 保持时间检查
- 传播延迟计算

## 基本使用流程

### 1. 读取设计

```tcl
# 读取网表
read_verilog design.v
# 读取时序约束
read_sdc constraints.sdc
```

### 2. 时序分析

```tcl
# 更新时序
update_timing
# 报告时序违例
report_timing -max_paths 10
```

## 常用命令

| 命令 | 功能 |
|------|------|
| `read_verilog` | 读取 Verilog 网表 |
| `read_sdc` | 读取时序约束 |
| `update_timing` | 更新时序数据 |
| `report_timing` | 报告时序路径 |

## 注意事项

> ⚠️ 确保所有库文件已正确加载

- 检查时序约束是否完整
- 验证时钟定义

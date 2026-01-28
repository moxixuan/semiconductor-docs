# 7nm/5nm工艺技术

## 工艺特点

### FinFET结构
7nm和5nm工艺采用FinFET（鳍式场效应晶体管）结构：
- 更好的栅极控制
- 降低漏电流
- 提高性能

### 多重图案
由于光刻机波长限制，需要使用多重图案技术：
- SADP（Self-Aligned Double Patterning）
- SAQP（Self-Aligned Quadruple Patterning）

### EUV光刻
5nm节点开始引入EUV（极紫外）光刻：
- 波长13.5nm
- 减少图案化步骤
- 降低成本

## 设计挑战

### 1. 间距规则
最小间距更加严格，需要注意：
- 金属层间距
- 通孔间距
- 标准单元布局

### 2. 时序收敛
- 更大的工艺偏差
- 更复杂的时序分析
- 需要更先进的OCV（On-Chip Variation）建模

### 3. 功耗管理
- 漏电流增加
- 需要多阈值电压库
- 电源门控技术

### 4. 良率考虑
- 更复杂的工艺
- 更多的缺陷源
- 需要DFM（Design for Manufacturing）技术

:::tip 设计建议
在7nm/5nm工艺中，建议使用厂商提供的设计手册和参考流程。
:::

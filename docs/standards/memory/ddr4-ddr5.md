# DDR4/DDR5 协议详解

## 概述

DDR (Double Data Rate) 是当前主流的动态随机存取存储器标准。

## DDR4 vs DDR5

| 特性 | DDR4 | DDR5 |
|------|-------|-------|
| 速度 | 1600-3200 MT/s | 3200-6400 MT/s |
| 电压 | 1.2V | 1.1V |
| 预取 | 最多8个 | 最多16个 |
| 突发长度 | 8 | 16 |
| 电源效率 | 低 | 更低 |
| 管脚数 | 288 | 268 |

## 时序图

### 读操作

```
        CAS  |  RAS |  R/C |  Bank/Group | Address
            └────────┘  └───────────┘
         tCAS    tRCD   tRP         tRAS
```

### 写操作

```
ACT | WR | DQS  | DM/DQ | Bank/Group | Address
     └─────────┘
  tWR
```

## 关键时序参数

### tRCD (RAS to CAS Delay)
从行激活到列地址选择的延迟：
```
tRCD = max(tRCDR, tRPD)
```

### tRP (Row Precharge Time)
关闭一行并打开新一行的时间：
```
tRP = Bank precharge time
```

### tRAS (Row Access Strobe Time)
从行激活到预充电的最小时间：
```
tRAS >= tRCD + tRP
```

### tWR (Write Recovery Time)
写入后到预充电的延迟：
```
tWR >= Write recovery time
```

### tCCD (CAS to CAS Delay)
同一Bank两次列访问的最小间隔。

### tRRD (Row to Row Delay)
不同Bank行激活的最小间隔。

## 时序约束

### 读取时序
```verilog
// DDR4读取时序
always @(posedge clk) begin
    if (read_enable) begin
        // CAS latency: CL
        // RAS to CAS delay: tRCD
        // Row precharge: tRP
        // Row access: tRAS
    end
end
```

### 写入时序
```verilog
// DDR5写入时序
always @(posedge clk) begin
    if (write_enable) begin
        // Write recovery: tWR
        // Burst length: BL
    end
end
```

## 控制信号

### 标准控制
- **CS#**: 片选信号
- **RAS#: 行地址选通
- **CAS#: 列地址选通
- **WE#: 写使能

### 现代控制
- **CKE**: 时钟使能
- **ODT**: 片上终端电阻
- **RTT**: 终端电阻

## 设计考虑

### 信号完整性
```verilog
// 差分时钟
wire diff_clk_p;
wire diff_clk_n;

// 差分数据选通
wire dqs_p;
wire dqs_n;

// ODT配置
input odt [2:0];
```

### 电源管理
```verilog
// 动态功耗控制
always @(posedge clk) begin
    if (low_power_mode) begin
        // 降低刷新率
        refresh_rate <= 8'h1;
    end
end
```

:::tip 设计建议
- 严格遵守JEDEC规范
- 使用厂商提供的时序模型
- 仿真完整的读写时序
- 考虑PVT（工艺、电压、温度）变化
:::

## 参考资源

- [JEDEC DDR4 标准](https://www.jedec.org/)
- [JEDEC DDR5 标准](https://www.jedec.org/)
- 厂商数据手册
- DDR控制器设计指南

---

**相关文档**：
- [AMBA AXI协议](./../bus/amba-axi.md)
- [存储协议概述](./intro.md)
- [LPDDR协议](./lpddr.md)

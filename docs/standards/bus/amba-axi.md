# AMBA AXI 协议

## 简介

AMBA（Advanced Microcontroller Bus Architecture）是ARM公司推出的总线架构。

AXI（Advanced eXtensible Interface）是AMBA 3.0/4.0/5.0中最重要的协议。

## AXI特点

### 1. 通道分离
- **写地址通道**（Write Address）
- **写数据通道**（Write Data）
- **写响应通道**（Write Response）
- **读地址通道**（Read Address）
- **读数据通道**（Read Data）

### 2. 突发传输
支持多种突发类型：
- FIXED：固定地址
- INCR：递增地址
- WRAP：回绕地址

### 3. 独立读写
读和写操作完全独立，可以同时进行。

### 4. 乱序执行
支持乱序完成（通过ID标识）。

## 信号接口

```verilog
// 写地址通道
output [ID_WIDTH-1:0]     m_axi_awid;
output [ADDR_WIDTH-1:0]   m_axi_awaddr;
output [7:0]              m_axi_awlen;
output [2:0]              m_axi_awsize;
output [1:0]              m_axi_awburst;
output                    m_axi_awvalid;
input                     m_axi_awready;

// 写数据通道
output [DATA_WIDTH-1:0]   m_axi_wdata;
output [STRB_WIDTH-1:0]   m_axi_wstrb;
output                    m_axi_wlast;
output                    m_axi_wvalid;
input                     m_axi_wready;

// 写响应通道
input [ID_WIDTH-1:0]      m_axi_bid;
input [1:0]               m_axi_bresp;
input                     m_axi_bvalid;
output                    m_axi_bready;
```

## 时序图

典型的AXI写传输：
```
AWVALID ─────┐            ┌─────────────
             └────────────┘
AWREADY ──┐                ┌─────────────
          └────────────────┘
WVALID  ─────────────────────┐      ┌────
                                └──────┘
```

:::info 最佳实践
- 合理使用乱序能力提高性能
- 注意对齐要求
- 正确处理响应错误
:::

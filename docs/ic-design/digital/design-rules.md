# 数字电路设计规则

## 基本设计原则

### 1. 命名规范
- 信号名使用小写字母和下划线：`data_valid`, `clk_200m`
- 常量使用大写字母：`MAX_COUNT`, `DEFAULT_VALUE`
- 模块名使用有意义的名称

### 2. 时钟设计
```verilog
// 好的实践
always @(posedge clk or negedge rst_n) begin
  if (!rst_n)
    counter <= 8'd0;
  else if (enable)
    counter <= counter + 1;
end

// 避免：门控时钟
// 使用时钟使能代替
```

### 3. 复位策略
- 异步复位，同步释放
- 每个寄存器都应该有复位

```verilog
always @(posedge clk or negedge rst_n) begin
  if (!rst_n)
    // 异步复位
    data_out <= 8'd0;
  else
    // 同步逻辑
    data_out <= data_in;
end
```

## 时序考虑

### 建立时间和保持时间
- **建立时间（Setup Time）**：数据必须在时钟沿之前稳定
- **保持时间（Hold Time）**：数据必须在时钟沿之后保持稳定

### 时钟偏斜
尽量减少时钟偏斜对设计的影响：
- 使用时钟树综合（CTS）
- 平衡时钟网络

:::tip 最佳实践
使用专业的时序分析工具（如PrimeTime）进行完整的时序验证。
:::

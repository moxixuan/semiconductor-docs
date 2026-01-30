# 局域网访问启动指南

## 启动开发服务器（局域网可访问）

### 快速启动

```bash
cd /home/moxixuan/semiconductor-docs
npm run start:lan
```

### 访问地址

服务器启动后，可以通过以下地址访问：

**本机访问：**
- http://localhost:3000/semiconductor-docs/

**局域网其他设备访问：**
- http://192.168.0.11:3000/semiconductor-docs/

### 注意事项

1. **防火墙设置**：确保端口 3000 已开放
2. **同一网络**：所有设备需要在同一个局域网内
3. **IP 地址变化**：如果 IP 地址变化，需要重新查询并更新

### 查询当前 IP 地址

```bash
hostname -I | awk '{print $1}'
```

### 停止服务器

在终端中按 `Ctrl + C` 即可停止服务器。

### 可用的 npm 脚本

| 命令 | 说明 |
|------|------|
| `npm start` | 本地开发服务器（仅本机访问） |
| `npm run start:lan` | 局域网开发服务器（局域网可访问） |
| `npm run build` | 构建生产版本 |
| `npm run serve` | 预览构建后的网站 |

---

**最后更新时间**：2025-01-30
**当前 IP 地址**：192.168.0.11

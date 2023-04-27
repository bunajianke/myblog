---
title: WSL 的安装与使用
date: 2023/4/27
tags:
  - WSL
categories:
  - system
  - notes
---

1. 必须运行 Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）

2. 启用 WSL 功能
```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

3. 启用虚拟化功能

4. 商店下载合适的 Linux 分发

5. 终端运行 `wsl -v` 检查安装是否成功
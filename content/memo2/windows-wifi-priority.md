---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Windows10でWi-Fiの優先順位を変更"
date: 2017-01-01
lastmod: 
---


 
Powershellなどで

```bash
netsh wlan set profileorder name="ネットワーク名" interface="Wi-Fi" priority=数字
```

とする. priorityは数字が若い方が優先順位が高い. 
<!--more-->
他には

```bash
netsh wlan show profiles
```

でネットワークの一覧を取得,

```bash
netsh wlan delete profile "ネットワーク名"
```

でネットワークの削除,

```bash
netsh wlan ?
```

などでヘルプの表示.
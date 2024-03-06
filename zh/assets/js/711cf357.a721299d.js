"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5812],{1169:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var r=n(5893),d=n(1151);const c={title:"\u73af\u5883\u53d8\u91cf",weight:3},t=void 0,i={id:"reference/env-variables",title:"\u73af\u5883\u53d8\u91cf",description:"\u5982\u5feb\u901f\u5165\u95e8\u6307\u5357\u4e2d\u6240\u8ff0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 https://get.k3s.io \u4e0a\u63d0\u4f9b\u7684\u5b89\u88c5\u811a\u672c\u5728\u57fa\u4e8e systemd \u548c openrc \u7684\u7cfb\u7edf\u4e0a\u5c06 K3s \u5b89\u88c5\u4e3a\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/env-variables.md",sourceDirName:"reference",slug:"/reference/env-variables",permalink:"/zh/reference/env-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/env-variables.md",tags:[],version:"current",lastUpdatedAt:1709756953,formattedLastUpdatedAt:"2024\u5e743\u67086\u65e5",frontMatter:{title:"\u73af\u5883\u53d8\u91cf",weight:3},sidebar:"mySidebar",previous:{title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e",permalink:"/zh/advanced"},next:{title:"Flag Deprecation",permalink:"/zh/reference/flag-deprecation"}},l={},h=[];function o(e){const s={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\u5982",(0,r.jsx)(s.a,{href:"/zh/quick-start",children:"\u5feb\u901f\u5165\u95e8\u6307\u5357"}),"\u4e2d\u6240\u8ff0\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," \u4e0a\u63d0\u4f9b\u7684\u5b89\u88c5\u811a\u672c\u5728\u57fa\u4e8e systemd \u548c openrc \u7684\u7cfb\u7edf\u4e0a\u5c06 K3s \u5b89\u88c5\u4e3a\u670d\u52a1\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u6b64\u547d\u4ee4\u7684\u6700\u7b80\u5355\u5f62\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -\n"})})]}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u8be5\u65b9\u6cd5\u5b89\u88c5 K3s \u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u6765\u914d\u7f6e\u5b89\u88c5\uff1a"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u73af\u5883\u53d8\u91cf"}),(0,r.jsx)(s.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD"})}),(0,r.jsxs)(s.td,{children:["\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"})," \u5c06\u4e0d\u4f1a\u4e0b\u8f7d K3s \u54c8\u5e0c\u6216\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_SYMLINK"})}),(0,r.jsxs)(s.td,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u547d\u4ee4\u4e0d\u5b58\u5728\u4e8e\u8def\u5f84\u4e2d\uff0c\u5c06\u4e3a kubectl\u3001crictl \u548c ctr \u4e8c\u8fdb\u5236\u6587\u4ef6\u521b\u5efa\u7b26\u53f7\u94fe\u63a5\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"skip"})," \u5c06\u4e0d\u4f1a\u521b\u5efa\u7b26\u53f7\u94fe\u63a5\uff0c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"force"})," \u5c06\u4f1a\u8986\u76d6\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_ENABLE"})}),(0,r.jsxs)(s.td,{children:["\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"})," \u5c06\u4e0d\u4f1a\u542f\u7528\u6216\u542f\u52a8 K3s \u670d\u52a1\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_START"})}),(0,r.jsxs)(s.td,{children:["\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"})," \u5c06\u4e0d\u4f1a\u542f\u52a8 K3s \u670d\u52a1\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_VERSION"})}),(0,r.jsx)(s.td,{children:"\u4ece GitHub \u4e0b\u8f7d\u7684 K3s \u7248\u672c\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5c06\u5c1d\u8bd5\u4ece stable channel \u4e0b\u8f7d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_BIN_DIR"})}),(0,r.jsxs)(s.td,{children:["\u5b89\u88c5 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u3001\u94fe\u63a5\u548c\u5378\u8f7d\u811a\u672c\u7684\u76ee\u5f55\uff0c\u6216\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"/usr/local/bin"})," \u4f5c\u4e3a\u9ed8\u8ba4\u76ee\u5f55\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_BIN_DIR_READ_ONLY"})}),(0,r.jsxs)(s.td,{children:["\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"})," \u5c06\u4e0d\u4f1a\u5c06\u6587\u4ef6\u5199\u5165 ",(0,r.jsx)(s.code,{children:"INSTALL_K3S_BIN_DIR"}),"\uff0c\u5f3a\u5236\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD=true"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_SYSTEMD_DIR"})}),(0,r.jsxs)(s.td,{children:["\u5b89\u88c5 systemd \u670d\u52a1\u548c\u73af\u5883\u6587\u4ef6\u7684\u76ee\u5f55\uff0c\u6216\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"/etc/systemd/system"})," \u4f5c\u4e3a\u9ed8\u8ba4\u76ee\u5f55\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_EXEC"})}),(0,r.jsxs)(s.td,{children:["\u5e26\u6709\u6807\u5fd7\u7684\u547d\u4ee4\uff0c\u7528\u4e8e\u5728\u670d\u52a1\u4e2d\u542f\u52a8 K3s\u3002\u5982\u679c\u672a\u6307\u5b9a\u547d\u4ee4\u5e76\u4e14\u8bbe\u7f6e\u4e86 ",(0,r.jsx)(s.code,{children:"K3S_URL"}),'\uff0c\u5b83\u5c06\u9ed8\u8ba4\u4e3a "agent"\u3002\u5982\u679c\u672a\u8bbe\u7f6e ',(0,r.jsx)(s.code,{children:"K3S_URL"}),'\uff0c\u5b83\u5c06\u9ed8\u8ba4\u4e3a "server"\u3002\u5982\u9700\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605',(0,r.jsx)(s.a,{href:"/zh/installation/configuration#%E4%BD%BF%E7%94%A8%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC%E7%9A%84%E9%80%89%E9%A1%B9",children:"\u6b64\u793a\u4f8b"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_NAME"})}),(0,r.jsx)(s.td,{children:"\u8981\u521b\u5efa\u7684 systemd \u670d\u52a1\u7684\u540d\u79f0\uff0c\u5982\u679c\u5c06 K3s \u4f5c\u4e3a server \u8fd0\u884c\uff0c\u5219\u9ed8\u8ba4\u4e3a \u201ck3s\u201d\uff0c\u5982\u679c\u5c06 K3s \u4f5c\u4e3a agent \u8fd0\u884c\uff0c\u5219\u9ed8\u8ba4\u4e3a \u201ck3s-agent\u201d\u3002\u5982\u679c\u6307\u5b9a\uff0c\u540d\u79f0\u5c06\u4ee5\u201ck3s-\u201d\u4e3a\u524d\u7f00\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_TYPE"})}),(0,r.jsx)(s.td,{children:"\u8981\u521b\u5efa\u7684 systemd \u670d\u52a1\u7c7b\u578b\uff0c\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5c06\u9ed8\u8ba4\u4f7f\u7528\u6765\u81ea K3s exec \u547d\u4ee4\u7684\u7c7b\u578b\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_SELINUX_WARN"})}),(0,r.jsxs)(s.td,{children:["\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\uff0c\u5219\u5728\u672a\u627e\u5230 k3s-selinux \u7b56\u7565\u65f6\u4f1a\u7ee7\u7eed\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_SELINUX_RPM"})}),(0,r.jsxs)(s.td,{children:["\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(s.code,{children:"true"})," \u5c06\u8df3\u8fc7 k3s RPM \u7684\u81ea\u52a8\u5b89\u88c5\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_CHANNEL_URL"})}),(0,r.jsxs)(s.td,{children:["\u7528\u4e8e\u83b7\u53d6 K3s \u4e0b\u8f7d URL \u7684 Channel URL\u3002\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(s.a,{href:"https://update.k3s.io/v1-release/channels%E3%80%82",children:"https://update.k3s.io/v1-release/channels\u3002"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"INSTALL_K3S_CHANNEL"})}),(0,r.jsxs)(s.td,{children:['\u7528\u4e8e\u83b7\u53d6 K3s \u4e0b\u8f7d URL \u7684 Channel\u3002\u9ed8\u8ba4\u4e3a "stable"\u3002\u53ef\u9009\u9879\uff1a',(0,r.jsx)(s.code,{children:"stable"}),"\u3001",(0,r.jsx)(s.code,{children:"latest"}),"\u3001",(0,r.jsx)(s.code,{children:"testing"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u5982\u4f55\u5c06\u4e0a\u8ff0\u73af\u5883\u53d8\u91cf\u4f5c\u4e3a\u9009\u9879\u8bbe\u7f6e\uff08\u5728\u7ba1\u9053\u7b26\u540e\uff09\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5 ",(0,r.jsx)(s.code,{children:"K3S_"})," \u5f00\u5934\u7684\u73af\u5883\u53d8\u91cf\u5c06\u88ab\u4fdd\u7559\uff0c\u4f9b systemd \u548c openrc \u670d\u52a1\u4f7f\u7528\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,r.jsx)(s.code,{children:"K3S_URL"})," \u4f46\u6ca1\u6709\u8bbe\u7f6e exec \u547d\u4ee4\uff0c\u5c06\u9ed8\u8ba4\u547d\u4ee4\u4e3a\u201cagent\u201d\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u8fd0\u884c agent \u65f6\uff0c\u8fd8\u5fc5\u987b\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"K3S_TOKEN"}),"\u3002"]})]})}function x(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>t});var r=n(7294);const d={},c=r.createContext(d);function t(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);
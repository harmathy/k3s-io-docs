"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9513],{529:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var r=d(5893),l=d(1151);const t={title:"agent",weight:2},s="k3s agent",i={id:"cli/agent",title:"agent",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/agent.md",sourceDirName:"cli",slug:"/cli/agent",permalink:"/zh/cli/agent",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/agent.md",tags:[],version:"current",lastUpdatedAt:1709756953,formattedLastUpdatedAt:"2024\u5e743\u67086\u65e5",frontMatter:{title:"agent",weight:2},sidebar:"mySidebar",previous:{title:"server",permalink:"/zh/cli/server"},next:{title:"certificate",permalink:"/zh/cli/certificate"}},c={},a=[{value:"Logging",id:"logging",level:3},{value:"\u96c6\u7fa4\u9009\u9879",id:"\u96c6\u7fa4\u9009\u9879",level:3},{value:"\u6570\u636e",id:"\u6570\u636e",level:3},{value:"\u8282\u70b9",id:"\u8282\u70b9",level:3},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u81ea\u5b9a\u4e49\u6807\u5fd7",id:"\u81ea\u5b9a\u4e49\u6807\u5fd7",level:3},{value:"\u5b9e\u9a8c\u529f\u80fd",id:"\u5b9e\u9a8c\u529f\u80fd",level:3},{value:"\u5df2\u5f03\u7528",id:"\u5df2\u5f03\u7528",level:3},{value:"Agent \u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",id:"agent-\u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",level:3},{value:"K3s Agent CLI \u5e2e\u52a9",id:"k3s-agent-cli-\u5e2e\u52a9",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"k3s-agent",children:"k3s agent"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e K3s Agent\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0cServer \u4e5f\u8fd0\u884c Agent\uff0c\u56e0\u6b64\u672c\u6587\u5217\u51fa\u7684\u6240\u6709\u6807\u5fd7\u4e5f\u53ef\u7528\u4e8e Server\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u672c\u6587\u4e2d\uff0c\u9009\u9879\u4f5c\u4e3a CLI \u6807\u5fd7\u4f20\u9012\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u9009\u9879\u4f20\u9012\u3002\u6709\u5173\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"/zh/installation/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\u6587\u6863\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"-v"})," value"]}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u8868\u793a\u65e5\u5fd7\u7ea7\u522b\u8be6\u7ec6\u7a0b\u5ea6\u7684\u6570\u5b57"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--vmodule"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"FILE_PATTERN=LOG_LEVEL \u683c\u5f0f\uff0c\u7528\u9017\u53f7\u5206\u9694\u7684\u5217\u8868\uff0c\u7528\u4e8e\u6587\u4ef6\u8fc7\u6ee4\u65e5\u5fd7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--log value, -l"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u8bb0\u5f55\u5230\u6587\u4ef6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--alsologtostderr"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u8bb0\u5f55\u5230\u6807\u51c6\u9519\u8bef\u4ee5\u53ca\u6587\u4ef6\uff08\u5982\u679c\u8bbe\u7f6e\uff09"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u96c6\u7fa4\u9009\u9879",children:"\u96c6\u7fa4\u9009\u9879"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u73af\u5883\u53d8\u91cf"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--token value, -t"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_TOKEN"})}),(0,r.jsx)(n.td,{children:"\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u4ee4\u724c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--token-file"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_TOKEN_FILE"})}),(0,r.jsx)(n.td,{children:"\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u4ee4\u724c\u6587\u4ef6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--server value, -s"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_URL"})}),(0,r.jsx)(n.td,{children:"\u8981\u8fde\u63a5\u7684 server"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e",children:"\u6570\u636e"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--data-dir value, -d"})," value"]}),(0,r.jsx)(n.td,{children:'"/var/lib/rancher/k3s"'}),(0,r.jsx)(n.td,{children:"\u4fdd\u5b58\u72b6\u6001\u7684\u6587\u4ef6\u5939"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8282\u70b9",children:"\u8282\u70b9"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u73af\u5883\u53d8\u91cf"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-name"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_NODE_NAME"})}),(0,r.jsx)(n.td,{children:"\u8282\u70b9\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--with-node-id"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u5c06 ID \u5c3e\u9644\u5230\u8282\u70b9\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-label"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u4f7f\u7528\u4e00\u7ec4\u6807\u7b7e\u6ce8\u518c\u548c\u542f\u52a8 kubelet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-taint"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u4f7f\u7528\u4e00\u7ec4\u6c61\u70b9\u6ce8\u518c kubelet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--protect-kernel-defaults"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u5185\u6838\u8c03\u4f18\u884c\u4e3a\u3002\u5982\u679c\u8bbe\u7f6e\u4e86\uff0c\u5f53\u5185\u6838\u53ef\u8c03\u9879\u4e0e kubelet \u9ed8\u8ba4\u503c\u4e0d\u540c\u65f6\u4f1a\u51fa\u9519\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--selinux"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_SELINUX"})}),(0,r.jsx)(n.td,{children:"\u5728 containerd \u4e2d\u542f\u7528 SELinux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--lb-server-port"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_LB_SERVER_PORT"})}),(0,r.jsx)(n.td,{children:"Supervisor \u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u672c\u5730\u7aef\u53e3\u3002\u5982\u679c supervisor \u548c apiserver \u6ca1\u6709\u4f4d\u4e8e\u540c\u4e00\u4f4d\u7f6e\uff0c\u5219\u6bd4\u8be5\u7aef\u53e3\u5c0f 1 \u7684\u7aef\u53e3\u4e5f\u5c06\u7528\u4e8e apiserver \u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u9ed8\u8ba4\u503c\uff1a6444\uff09"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8fd0\u884c\u65f6",children:"\u8fd0\u884c\u65f6"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--container-runtime-endpoint"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u7981\u7528\u5d4c\u5165\u5f0f containerd \u5e76\u5728\u7ed9\u5b9a\u8def\u5f84\u4f7f\u7528 CRI \u5957\u63a5\u5b57\u3002\u5f53\u4e0e --docker \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u8fd9\u4f1a\u8bbe\u7f6e cri-docker \u5957\u63a5\u5b57\u8def\u5f84"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--pause-image"})," value"]}),(0,r.jsx)(n.td,{children:'"docker.io/rancher/pause:3.1"'}),(0,r.jsx)(n.td,{children:"\u4e3a containerd \u6216 Docker \u6c99\u7bb1\u5b9a\u5236\u7684 pause \u955c\u50cf"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--private-registry"})," value"]}),(0,r.jsx)(n.td,{children:'"/etc/rancher/k3s/registries.yaml"'}),(0,r.jsx)(n.td,{children:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u7f51\u7edc",children:"\u7f51\u7edc"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u73af\u5883\u53d8\u91cf"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-ip value, -i"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u8282\u70b9\u7684 IP \u5730\u5740"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-external-ip"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u8282\u70b9\u7684\u5916\u90e8 IP \u5730\u5740"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--resolv-conf"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_RESOLV_CONF"})}),(0,r.jsx)(n.td,{children:"Kubelet resolv.conf \u6587\u4ef6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--flannel-iface"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel interface"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--flannel-conf"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel \u914d\u7f6e\u6587\u4ef6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--flannel-cni-conf"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"\u8986\u76d6\u9ed8\u8ba4\u7684 Flannel CNI \u914d\u7f6e\u6587\u4ef6"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u6807\u5fd7",children:"\u81ea\u5b9a\u4e49\u6807\u5fd7"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kubelet-arg"})," value"]}),(0,r.jsx)(n.td,{children:"kubelet \u8fdb\u7a0b\u7684\u81ea\u5b9a\u4e49\u6807\u5fd7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kube-proxy-arg"})," value"]}),(0,r.jsx)(n.td,{children:"kube-proxy \u8fdb\u7a0b\u7684\u81ea\u5b9a\u4e49\u6807\u5fd7"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b9e\u9a8c\u529f\u80fd",children:"\u5b9e\u9a8c\u529f\u80fd"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--rootless"})}),(0,r.jsx)(n.td,{children:"\u65e0\u6839\u8fd0\u884c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--docker"})}),(0,r.jsx)(n.td,{children:"\u4f7f\u7528 cri-dockerd \u800c\u4e0d\u662f containerd"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--prefer-bundled-bin"})}),(0,r.jsx)(n.td,{children:"\u504f\u5411\u6253\u5305\u7684\u7528\u6237\u7a7a\u95f4\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u4e3b\u673a\u4e8c\u8fdb\u5236\u6587\u4ef6"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u5df2\u5f03\u7528",children:"\u5df2\u5f03\u7528"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6807\u5fd7"}),(0,r.jsx)(n.th,{children:"\u73af\u5883\u53d8\u91cf"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--no-flannel"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"--flannel-backend=none"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--cluster-secret"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_CLUSTER_SECRET"})}),(0,r.jsxs)(n.td,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"--token"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"agent-\u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",children:"Agent \u7684\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["K3s Agent \u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"--node-label"})," \u548c ",(0,r.jsx)(n.code,{children:"--node-taint"})," \u9009\u9879\u6765\u914d\u7f6e\uff0c\u5b83\u4eec\u4f1a\u4e3a kubelet \u6dfb\u52a0\u6807\u7b7e\u548c\u6c61\u70b9\u3002\u8fd9\u4e24\u4e2a\u9009\u9879\u53ea\u80fd\u5728\u6ce8\u518c\u65f6\u6dfb\u52a0\u6807\u7b7e\u548c/\u6216\u6c61\u70b9\uff0c\u56e0\u6b64\u5b83\u4eec\u53ea\u80fd\u88ab\u6dfb\u52a0\u4e00\u6b21\uff0c\u4e4b\u540e\u4e0d\u80fd\u518d\u901a\u8fc7\u8fd0\u884c K3s \u547d\u4ee4\u6765\u6539\u53d8\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u663e\u793a\u5982\u4f55\u6dfb\u52a0\u6807\u7b7e\u548c\u6c61\u70b9\u7684\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"     --node-label foo=bar \\\n     --node-label hello=world \\\n     --node-taint key1=value1:NoExecute\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5728\u8282\u70b9\u6ce8\u518c\u540e\u66f4\u6539\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"kubectl"}),"\u3002\u5173\u4e8e\u5982\u4f55\u6dfb\u52a0",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/",children:"\u6c61\u70b9"}),"\u548c",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node",children:"\u8282\u70b9\u6807\u7b7e"}),"\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 Kubernetes \u6587\u6863\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"k3s-agent-cli-\u5e2e\u52a9",children:"K3s Agent CLI \u5e2e\u52a9"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u67d0\u4e2a\u9009\u9879\u51fa\u73b0\u5728\u62ec\u53f7\u4e2d\uff08\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"[$K3S_URL]"}),"\uff09\uff0c\u8be5\u9009\u9879\u53ef\u4ee5\u4f5c\u4e3a\u8be5\u540d\u79f0\u7684\u73af\u5883\u53d8\u91cf\u4f20\u5165\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'NAME:\n   k3s agent - Run node agent\n\nUSAGE:\n   k3s agent [OPTIONS]\n\nOPTIONS:\n   --config FILE, -c FILE                     (config) Load configuration from FILE (default: "/etc/rancher/k3s/config.yaml") [$K3S_CONFIG_FILE]\n   --debug                                    (logging) Turn on debug logs [$K3S_DEBUG]\n   -v value                                   (logging) Number for the log level verbosity (default: 0)\n   --vmodule value                            (logging) Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging\n   --log value, -l value                      (logging) Log to file\n   --alsologtostderr                          (logging) Log to standard error as well as file (if set)\n   --token value, -t value                    (cluster) Token to use for authentication [$K3S_TOKEN]\n   --token-file value                         (cluster) Token file to use for authentication [$K3S_TOKEN_FILE]\n   --server value, -s value                   (cluster) Server to connect to [$K3S_URL]\n   --data-dir value, -d value                 (agent/data) Folder to hold state (default: "/var/lib/rancher/k3s")\n   --node-name value                          (agent/node) Node name [$K3S_NODE_NAME]\n   --with-node-id                             (agent/node) Append id to node name\n   --node-label value                         (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                         (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value  (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value   (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --selinux                                  (agent/node) Enable SELinux in containerd [$K3S_SELINUX]\n   --lb-server-port value                     (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer.(default: 6444) [$K3S_LB_SERVER_PORT]\n   --protect-kernel-defaults                  (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --container-runtime-endpoint value         (agent/runtime) Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the docker socket path\n   --pause-image value                        (agent/runtime) Customized pause image for containerd or docker sandbox (default: "rancher/mirrored-pause:3.6")\n   --snapshotter value                        (agent/runtime) Override default containerd snapshotter (default: "overlayfs")\n   --private-registry value                   (agent/runtime) Private registry configuration file (default: "/etc/rancher/k3s/registries.yaml")\n   --node-ip value, -i value                  (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                   (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                        (agent/networking) Kubelet resolv.conf file [$K3S_RESOLV_CONF]\n   --flannel-iface value                      (agent/networking) Override default flannel interface\n   --flannel-conf value                       (agent/networking) Override default flannel config file\n   --flannel-cni-conf value                   (agent/networking) Override default flannel cni config file\n   --kubelet-arg value                        (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                     (agent/flags) Customized flag for kube-proxy process\n   --rootless                                 (experimental) Run rootless\n   --prefer-bundled-bin                       (experimental) Prefer bundled userspace binaries over host binaries\n   --docker                                   (agent/runtime) (experimental) Use cri-dockerd instead of containerd\n'})})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,d)=>{d.d(n,{Z:()=>i,a:()=>s});var r=d(7294);const l={},t=r.createContext(l);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
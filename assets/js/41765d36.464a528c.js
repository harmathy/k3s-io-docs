"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1615],{6175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(5893),o=t(1151);const s={title:"Volumes and Storage",weight:30},r=void 0,l={id:"storage",title:"Volumes and Storage",description:"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails.",source:"@site/docs/storage.md",sourceDirName:".",slug:"/storage",permalink:"/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/storage.md",tags:[],version:"current",lastUpdatedAt:1709756953,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"Volumes and Storage",weight:30},sidebar:"mySidebar",previous:{title:"Cluster Access",permalink:"/cluster-access"},next:{title:"Networking",permalink:"/networking"}},i={},c=[{value:"What&#39;s different about K3s storage?",id:"whats-different-about-k3s-storage",level:2},{value:"Setting up the Local Storage Provider",id:"setting-up-the-local-storage-provider",level:2},{value:"pvc.yaml",id:"pvcyaml",level:3},{value:"pod.yaml",id:"podyaml",level:3},{value:"Setting up Longhorn",id:"setting-up-longhorn",level:2},{value:"pvc.yaml",id:"pvcyaml-1",level:3},{value:"pod.yaml",id:"podyaml-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails."}),"\n",(0,a.jsxs)(n.p,{children:["A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage. For details on how PVs and PVCs work, refer to the official Kubernetes documentation on ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/volumes/",children:"storage."})]}),"\n",(0,a.jsxs)(n.p,{children:["This page describes how to set up persistent storage with a local storage provider, or with ",(0,a.jsx)(n.a,{href:"#setting-up-longhorn",children:"Longhorn."})]}),"\n",(0,a.jsx)(n.h2,{id:"whats-different-about-k3s-storage",children:"What's different about K3s storage?"}),"\n",(0,a.jsx)(n.p,{children:'K3s removes several optional volume plugins and all built-in (sometimes referred to as "in-tree") cloud providers. We do this in order to achieve a smaller binary size and to avoid dependence on third-party cloud or data center technologies and services, which may not be available in many K3s use cases. We are able to do this because their removal affects neither core Kubernetes functionality nor conformance.'}),"\n",(0,a.jsx)(n.p,{children:"The following volume plugins have been removed from K3s:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"cephfs"}),"\n",(0,a.jsx)(n.li,{children:"fc"}),"\n",(0,a.jsx)(n.li,{children:"flocker"}),"\n",(0,a.jsx)(n.li,{children:"git_repo"}),"\n",(0,a.jsx)(n.li,{children:"glusterfs"}),"\n",(0,a.jsx)(n.li,{children:"portworx"}),"\n",(0,a.jsx)(n.li,{children:"quobyte"}),"\n",(0,a.jsx)(n.li,{children:"rbd"}),"\n",(0,a.jsx)(n.li,{children:"storageos"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Both components have out-of-tree alternatives that can be used with K3s: The Kubernetes ",(0,a.jsx)(n.a,{href:"https://github.com/container-storage-interface/spec/blob/master/spec.md",children:"Container Storage Interface (CSI)"})," and ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/",children:"Cloud Provider Interface (CPI)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Kubernetes maintainers are actively migrating in-tree volume plugins to CSI drivers. For more information on this migration, please refer ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-the-local-storage-provider",children:"Setting up the Local Storage Provider"}),"\n",(0,a.jsxs)(n.p,{children:["K3s comes with Rancher's Local Path Provisioner and this enables the ability to create persistent volume claims out of the box using local storage on the respective node. Below we cover a simple example. For more information please reference the official documentation ",(0,a.jsx)(n.a,{href:"https://github.com/rancher/local-path-provisioner/blob/master/README.md#usage",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Create a hostPath backed persistent volume claim and a pod to utilize it:"}),"\n",(0,a.jsx)(n.h3,{id:"pvcyaml",children:"pvc.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-path-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n"})}),"\n",(0,a.jsx)(n.h3,{id:"podyaml",children:"pod.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: local-path-pvc\n"})}),"\n",(0,a.jsx)(n.p,{children:"Apply the yaml:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"Confirm the PV and PVC are created:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get pv\nkubectl get pvc\n"})}),"\n",(0,a.jsx)(n.p,{children:"The status should be Bound for each."}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-longhorn",children:"Setting up Longhorn"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Longhorn does not support ARM32."})}),"\n",(0,a.jsxs)(n.p,{children:["K3s supports ",(0,a.jsx)(n.a,{href:"https://github.com/longhorn/longhorn",children:"Longhorn"}),", an open-source distributed block storage system for Kubernetes."]}),"\n",(0,a.jsxs)(n.p,{children:["Below we cover a simple example. For more information, refer to the ",(0,a.jsx)(n.a,{href:"https://longhorn.io/docs/latest/",children:"official documentation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Apply the longhorn.yaml to install Longhorn:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.5.1/deploy/longhorn.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Longhorn will be installed in the namespace ",(0,a.jsx)(n.code,{children:"longhorn-system"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Apply the yaml to create the PVC and pod:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pvcyaml-1",children:"pvc.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-volv-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n"})}),"\n",(0,a.jsx)(n.h3,{id:"podyaml-1",children:"pod.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: longhorn-volv-pvc\n"})}),"\n",(0,a.jsx)(n.p,{children:"Confirm the PV and PVC are created:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get pv\nkubectl get pvc\n"})}),"\n",(0,a.jsx)(n.p,{children:"The status should be Bound for each."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(7294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
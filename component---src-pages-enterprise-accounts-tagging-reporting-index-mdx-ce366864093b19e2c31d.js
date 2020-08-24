(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{X2bF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var s,r=a("k1TG"),o=a("8o2o"),n=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("T0C+"),a("qKvR"),{}),b=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),u={_frontmatter:c},p=i.a;function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(p,Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Tagging can help with managing where instance-level charges are coming from for your specific resources. When you use a consistent tagging schema to identity which resources are tied to specific cost centers, data centers, projects, teams etc., you can group and filter by those tags when breaking down and analyzing costs within the usage data export."),Object(n.b)("p",null,"For example, one of your projects might have a Kubernetes cluster, a couple Cloud Foundry app deployments, Cloud Object Storage buckets, Watson Assistant APIs, and Cloudant databases running around the world. Since those services can be spread across different resource groups and Cloud Foundry orgs and spaces with different access controls, using tags consistently will help you make sure the right costs are getting charged back to the right project."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A resource is anything that you can create from the catalog that is managed by and contained within aresource group. Some examples include apps, service instances, container clusters, storage volumes, and virtual servers. When you add a resource to your account from the catalog, you can assign the resource to a resource group.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A resource group is a feature that you use to organize your accountresourcesfor access control and billing purposes. If you’re familiar with using Cloud Foundry spaces, think of organizing resources in resource groups similarly to the way you organized resources in spaces. ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A resource is anything that can be created, managed, and contained within a resource group. Users aren’t added to resource groups. Only resources can be added."))),Object(n.b)("p",null,"Access to resources is managed by using IBM Cloud Identity and Access Management (IAM) access control. The services that support the use of IAM roles for access and organization within a resource group are referred to as IAM-enabled services."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"TAG Resources"),Object(n.b)("li",{parentName:"ul"},"Working with Tag Resources"),Object(n.b)("li",{parentName:"ul"},"Granting Tag Resources to User")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Adding and removing tags on a resource")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQoz22SS08CMRSF50e6dmlMXBnxHxCYGTpt58EQWbDSrQEUiPERTdS9K1kZlwLyGCMGNfHY22EmBV2cNLe99+u5t7VKpRJIjDF4nqdVqVT+jWklreYw2C7D5q7Axo6AlRUKIXJxzrXMeHVfruVw1CKBg1jCyg6q1WquKIr0GsfxH5k5WV4YpRIygCXIvuuqQOQJdKtLe0uHjuPkbRaLxbQjX0BKiSCswvFCXUex5St3TCX6vr8CPDw6RKfbwcnpKZqtll5b7TaOm03U63Vw1SbVpMDIAKrbCJi1QG3RXO+vb5AMx5i+DDAbDLFI3vAxnQGfX7g4P0fJKSMIAg0sM8Oh8LhuhQ6zuTHXwe3VHSZvwGw6R6L0OkwwGiX4VuBLDbR1Dc2uIgyHctmyCaQZXZ2d4bnfR//hAU+PfcwnE7y/jvGzWGiHZQUMwxTITCBn6q+pFs1Xo9kU9vextb2ttVcooNvrodPrqrl20Wg0wDhTefIvkB6FgGEY5kA6EFxot7VaTbunPfpetm2rfHplqYE0Q5evOaRvsf7KVJy5pjiKUuc0bw03vg0B4yXwF1U+Z1kVDw89AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Cloud Enterprise Account Model",title:"IBM Cloud Enterprise Account Model",src:"/ibm-enterprise-runbooks/static/6d64269bce5dcf41a01b8f6fc30be686/3cbba/tags.png",srcSet:["/ibm-enterprise-runbooks/static/6d64269bce5dcf41a01b8f6fc30be686/7fc1e/tags.png 288w","/ibm-enterprise-runbooks/static/6d64269bce5dcf41a01b8f6fc30be686/a5df1/tags.png 576w","/ibm-enterprise-runbooks/static/6d64269bce5dcf41a01b8f6fc30be686/3cbba/tags.png 1152w","/ibm-enterprise-runbooks/static/6d64269bce5dcf41a01b8f6fc30be686/47614/tags.png 1688w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Export Tags")),Object(n.b)("p",null,"Export tags within your usage data to help with cost allocation.  When users add tags to their resources within the platform, whether that’s through the Resource List, Resource Detail Pages, or Provisioning Pages, tags now appear in the usage CSV export on the usage tab."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABf0lEQVQoz01R204CQQzdTxeJsMzsXJbd1QeCIeKT128Q8QEB/QIVEhIVRO76YnJsCygPJ+2009PTNlAlhUhreB8jSRKkaUq+h3MOWZohyzLE8TqXlMuw1qJMNiY47ySuLeWojnOBKZUQhiF0FP0RFYpFgaJGjINCASH9K1JsL5fDfj4vMaWVCCmqWGwUaQSeiCICK+Fup/U6mjcNNBsNdO/v0W230W618NDpCNh/7HZwe9dCdngkykKTIs0ORVDgjRGpMiqNcXFygtHzE4YvLxj1emI/+n1MBgPBcjgEplN8z+Y4rtVkHdoSIa2Hpwssj6XUei+UvDw7x2g4w2I8xjcVfu1gNZmI/VmtsJrPUa1WqaaMyLHCDaHbVUiSL6+u8f65wHgyxXyxEMyoeGunM2q2XOL17Q2VSkWEuDiVlQmhURqGSJmQwQnvrFx+e3VnHVLyY2qo6DjWWCLxsM7KqCWT/CuMSR0Tcqc/ws21t034zZb/mM1EnggZTKjdv8Jf8HXWIh+nyeUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Cloud Enterprise Account Model",title:"IBM Cloud Enterprise Account Model",src:"/ibm-enterprise-runbooks/static/6f429069f29199e50efdab37dde608f9/3cbba/export-tag.png",srcSet:["/ibm-enterprise-runbooks/static/6f429069f29199e50efdab37dde608f9/7fc1e/export-tag.png 288w","/ibm-enterprise-runbooks/static/6f429069f29199e50efdab37dde608f9/a5df1/export-tag.png 576w","/ibm-enterprise-runbooks/static/6f429069f29199e50efdab37dde608f9/3cbba/export-tag.png 1152w","/ibm-enterprise-runbooks/static/6f429069f29199e50efdab37dde608f9/36072/export-tag.png 1667w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/resources?topic=resources-tag"}),"Working with Tags"))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-enterprise-accounts-tagging-reporting-index-mdx-ce366864093b19e2c31d.js.map
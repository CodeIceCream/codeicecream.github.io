"use strict";(self.webpackChunkcodeicecream_github_io=self.webpackChunkcodeicecream_github_io||[]).push([[1477],{10:r=>{r.exports=JSON.parse('{"blogPosts":[{"id":"package-version-prefix","metadata":{"permalink":"/blog/package-version-prefix","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-11-package-version-prefix.md","source":"@site/blog/2023-01-11-package-version-prefix.md","title":"Package Version Prefix","description":"\u4eca\u5929\u5728\u9879\u76ee\u5f15\u5165\u65b0\u7684npm\u5305\uff0c\u5f00\u53d1\u5b8c\u529f\u80fd\u6253\u7b97\u63d0\u4ea4\u7684\u65f6\u5019\u53d1\u73b0 package.json \u6587\u4ef6\u6709\u66f4\u6539\uff1a","date":"2023-01-11T00:00:00.000Z","formattedDate":"2023\u5e741\u670811\u65e5","tags":[{"label":"npm","permalink":"/blog/tags/npm"},{"label":"package","permalink":"/blog/tags/package"},{"label":"prefix","permalink":"/blog/tags/prefix"}],"readingTime":2.915,"hasTruncateMarker":false,"authors":[{"name":"Lucky Duck","title":"front-end fans","url":"https://github.com/CodeIceCream","imageURL":"https://avatars.githubusercontent.com/u/80355864?s=400&u=ad960889029ff8a72aca84233c7c3f5eb54cc8a3&v=4","key":"luckyduck"}],"frontMatter":{"slug":"package-version-prefix","title":"Package Version Prefix","authors":["luckyduck"],"tags":["npm","package","prefix"]},"nextItem":{"title":"Git ChangeId","permalink":"/blog/git-changeId"}},"content":"\u4eca\u5929\u5728\u9879\u76ee\u5f15\u5165\u65b0\u7684npm\u5305\uff0c\u5f00\u53d1\u5b8c\u529f\u80fd\u6253\u7b97\u63d0\u4ea4\u7684\u65f6\u5019\u53d1\u73b0 `package.json` \u6587\u4ef6\u6709\u66f4\u6539\uff1a\\r\\n\\r\\n`\\"@docusaurus/core\\": \\"2.2.0\\"  ---\x3e @docusaurus/core\\": \\"^2.2.0`\\r\\n\\r\\n\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u66f4\u6539\u4ec5\u4ec5\u662f **\u5305\u7684\u7248\u672c\u53f7\u591a\u4e86\u4e2a ^ \u7b26\u53f7\u524d\u7f00**\\r\\n\\r\\n### \u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236\u89c4\u8303\\r\\n\\r\\n\u8fd9\u4e2a\u7b26\u53f7\u5f88\u91cd\u8981\u5417\uff1f\\r\\n\u7b54\u6848\u662f\u91cd\u8981\uff0c\u5b83\u662f [**\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236\u89c4\u8303**](https://semver.org/lang/zh-CN/) \u7684\u4e00\u90e8\u5206\\r\\n\\r\\n\u6211\u4eec\u9996\u5148\u8981\u77e5\u9053 **\u7248\u672c\u53f7\u683c\u5f0f\u7684\u7ec4\u6210** \uff1a **\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7**\\r\\n\\r\\n### \u7248\u672c\u53f7\u4fee\u6539\u89c4\u5219\\r\\n\\r\\n\u90a3\u7248\u672c\u53f7\u4e00\u822c\u600e\u4e48\u9012\u589e\u7684\u5462\uff1f\\r\\n\\r\\n\u6bcf\u4e2a\u7ea7\u522b\u7684\u7248\u672c\u53f7\u90fd\u6709\u4e0d\u540c\u7684 **\u9012\u589e\u6761\u4ef6** \uff1a\\r\\n  + **\u4e3b\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u4e0d\u517c\u5bb9\u7684 API \u4fee\u6539**\\r\\n  + **\u6b21\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u529f\u80fd\u6027\u65b0\u589e**\\r\\n  + **\u4fee\u8ba2\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u95ee\u9898\u4fee\u6b63**\\r\\n\\r\\n### \u7248\u672c\u8303\u56f4\u8bed\u6cd5\\r\\n\\r\\n\u5f53\u7136\u6709\uff0c\u6709\u4e86 **\u9012\u589e\u6761\u4ef6** \uff0c \u6211\u4eec\u5c31\u53ef\u4ee5\u6839\u636e [**\u7248\u672c\u8303\u56f4\u8bed\u6cd5**](https://semver.npmjs.com/) \u6765\u9650\u5236\u9879\u76ee\u7a0b\u5e8f\u5f15\u5165\u7684\u4f9d\u8d56\u9879\u6216\u5f00\u53d1\u5305\u7684\u7248\u672c\u8303\u56f4\u3002\\r\\n\\r\\n\u800c\u7248\u672c\u53f7\u7b26\u53f7\u524d\u7f00\u5c31\u662f**\u7248\u672c\u8303\u56f4\u8bed\u6cd5**\\r\\n\\r\\n\u5982\u679c\u4f60\u8ba4\u771f\u89c2\u5bdf\u8fc7\u4f60\u7684``package.json``\u6587\u4ef6\u7684\u8bdd\uff0c\u4f60\u4e00\u5b9a\u4f1a\u53d1\u73b0\uff0c\u6709\u7684\u4f9d\u8d56\u7248\u672c\u53f7\u524d\u662f^\uff0c\u6709\u7684\u662f~\uff0c\u6709\u7684\u7248\u672c\u53f7\u524d\u6ca1\u6709\u4efb\u4f55\u7b26\u53f7\\r\\n\\r\\n```json\\r\\n    \\"@docusaurus/core\\": \\"2.2.0\\",\\r\\n    \\"@docusaurus/preset-classic\\": \\"~2.2.0\\",\\r\\n    \\"@mdx-js/react\\": \\"^1.6.22\\",\\r\\n    \\"clsx\\": \\"^1.2.1\\",\\r\\n    \\"prism-react-renderer\\": \\"^1.3.5\\",\\r\\n    \\"react\\": \\"^17.0.2\\",\\r\\n    \\"react-dom\\": \\"^17.0.2\\"\\r\\n```\\r\\n\\r\\n\\r\\n+ **^ \u8868\u793a\u4e3b\u7248\u672c\u53f7\u4e0d\u53d8\uff0c\u6b21\u7248\u672c\u53f7\u548c\u4fee\u8ba2\u53f7\u4f1a\u81ea\u52a8\u5b89\u88c5\u6700\u65b0\u7684\u3002\u4e3e\u4e2a\u4f8b\u5b50:**  \\r\\n\\r\\n  `\\"@mdx-js/react\\": \\"^1.6.22\\", \u7248\u672c\u8303\u56f4 >= 1.6.22 < 2.0.0`\\r\\n\\r\\n+ **~ \u8868\u793a\u4e3b\u7248\u672c\u53f7\u548c\u6b21\u7248\u672c\u53f7\u4e0d\u53d8\uff0c\u4fee\u8ba2\u53f7\u4f1a\u81ea\u52a8\u5b89\u88c5\u6700\u65b0\u7684\u3002\u4e3e\u4e2a\u4f8b\u5b50:**\\r\\n\\r\\n  `\\"@docusaurus/preset-classic\\": \\"~2.2.0\\", \u7248\u672c\u8303\u56f4 >=2.2.0 < 2.3.0`\\r\\n\\r\\n+ **\u6307\u5b9a\u7248\u672c\uff0c\u5373\u65e0^\u3001~\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a**\\r\\n\\r\\n  `\\"react\\": \\"17.0.2\\", \u6267\u884cnpm i\u5b89\u88c5\u4f9d\u8d56\u65f6\uff0c\u7cbe\u51c6\u5b89\u88c517.0.2\u7248\u672c\uff0c\u4e0d\u4f1a\u81ea\u52a8\u5b89\u88c5\u6700\u65b0\u7248\u672c`\\r\\n\\r\\n\u66f4\u591a\u53c2\u8003 [**\u7248\u672c\u8303\u56f4\u8bed\u6cd5\u793a\u4f8b**](https://semver.npmjs.com/)  \\r\\n\\r\\n### \u7248\u672c\u63a7\u5236\u7684\u610f\u4e49\\r\\n\\r\\n\u91c7\u7528\u5b98\u65b9\u7684\u4e00\u53e5\u8bdd\uff1a**\u5982\u679c\u4f9d\u8d56\u5173\u7cfb\u8fc7\u9ad8\uff0c\u53ef\u80fd\u9762\u4e34\u7248\u672c\u63a7\u5236\u88ab\u9501\u6b7b\u7684\u98ce\u9669\uff08\u5fc5\u987b\u5bf9\u6bcf\u4e00\u4e2a\u4f9d\u8d56\u5305\u6539\u7248\u624d\u80fd\u5b8c\u6210\u67d0\u6b21\u5347\u7ea7\uff09\u3002\u800c\u5982\u679c\u4f9d\u8d56\u5173\u7cfb\u8fc7\u4e8e\u677e\u6563\uff0c\u53c8\u5c06\u65e0\u6cd5\u907f\u514d\u7248\u672c\u7684\u6df7\u4e71\uff08\u5047\u8bbe\u517c\u5bb9\u4e8e\u672a\u6765\u7684\u591a\u4e2a\u7248\u672c\u5df2\u8d85\u51fa\u4e86\u5408\u7406\u6570\u91cf\uff09\u3002**\\r\\n\\r\\n\u7248\u672c\u63a7\u5236\u4f5c\u4e3a\u8fd9\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u4e4b\u4e00"},{"id":"git-changeId","metadata":{"permalink":"/blog/git-changeId","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-08-git-changeId.md","source":"@site/blog/2023-01-08-git-changeId.md","title":"Git ChangeId","description":"\u4eca\u5929\u63d0\u4ea4\u4ee3\u7801git commit\u3001git push\u4e4b\u540e\u53d1\u73b0\u4ee3\u7801\u65e0\u6cd5\u63a8\u9001\u81f3\u8fdc\u7aefGerrit\u670d\u52a1\u5668\u3002\u4ee5\u4e0b\u662f\u62a5\u9519\u4fe1\u606f\uff1a","date":"2023-01-08T00:00:00.000Z","formattedDate":"2023\u5e741\u67088\u65e5","tags":[{"label":"git","permalink":"/blog/tags/git"},{"label":"gerrit","permalink":"/blog/tags/gerrit"},{"label":"tools","permalink":"/blog/tags/tools"}],"readingTime":1.145,"hasTruncateMarker":false,"authors":[{"name":"Lucky Duck","title":"front-end fans","url":"https://github.com/CodeIceCream","imageURL":"https://avatars.githubusercontent.com/u/80355864?s=400&u=ad960889029ff8a72aca84233c7c3f5eb54cc8a3&v=4","key":"luckyduck"}],"frontMatter":{"slug":"git-changeId","title":"Git ChangeId","authors":["luckyduck"],"tags":["git","gerrit","tools"]},"prevItem":{"title":"Package Version Prefix","permalink":"/blog/package-version-prefix"},"nextItem":{"title":"MDX Blog","permalink":"/blog/mdx-blog"}},"content":"\u4eca\u5929\u63d0\u4ea4\u4ee3\u7801git commit\u3001git push\u4e4b\u540e\u53d1\u73b0\u4ee3\u7801\u65e0\u6cd5\u63a8\u9001\u81f3\u8fdc\u7aefGerrit\u670d\u52a1\u5668\u3002\u4ee5\u4e0b\u662f\u62a5\u9519\u4fe1\u606f\uff1a\\r\\n\\r\\n`Error: missing Change-Id in commmit message footer`\\r\\n\\r\\n\u600e\u4e48\u4f1a\u6ca1\u6709Change-Id\uff0c\u8fd9\u73a9\u610f\u4e0d\u662f\u4f1a\u81ea\u52a8\u751f\u6210\u7684\u5417\uff1f\u770b\u5230\u63a5\u4e0b\u6765\u7684\u63d0\u793a\uff1a\\r\\n\\r\\n``` \\r\\nHint: To automatically insert Change-Id, install the hook:\\r\\ngitdir=$(git rev-parse --git-dir); scp -p -P 29422 xxx@xx.xx.com:hooks/commit-msg ${gitdir}/hooks/\\r\\n```\\r\\n\\r\\n\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u540e\u6309\u7167\u63d0\u793a `git commit --amend` \uff0c\u4e0d\u7f16\u8f91\u76f4\u63a5\u9000\u51fa\u6587\u4ef6\u3002\\r\\n\u7136\u540e\u6267\u884c `git log` \u53d1\u73b0Change-Id\u5df2\u7ecf\u5728\u672c\u6b21\u63d0\u4ea4\u81ea\u52a8\u751f\u6210\u4e86\u3002\\r\\n\\r\\n\u8fd9\u662f\u4ec0\u4e48\u547d\u4ee4\uff0c\u4e3a\u4ec0\u4e48\u6709\u6548\uff1f\\r\\n\\r\\n\u7f51\u4e0a\u67e5\u5230\u547d\u4ee4\u7684\u89e3\u91ca\u662f\uff1a\\r\\n\\r\\n\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4\uff0c\u4f60\u7684\u672c\u5730\u4ed3\u5e93\u7684 `.git/hooks` \u6587\u4ef6\u5939\u4e0b\u7684 `commit-msg` \u6587\u4ef6\u5c06\u4f1a\u88ab Gerrit \u7684 `commit-msg` \u6587\u4ef6\u8986\u76d6\u6389\uff0c**\u800c\u5b83\u7684\u4f5c\u7528\u662f\u4eca\u540e\u7684\u63d0\u4ea4\u5f53\u4e2d\u4e5f\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a change-id**\u3002\\r\\n\\r\\n\u53c2\u8003\u94fe\u63a5:[Gerrit\u7684\u57fa\u672c\u4f7f\u7528-\u5982\u4f55\u7ed9\u672c\u5730\u4ed3\u5e93\u6dfb\u52a0\u94a9\u5b50 commit-msg](https://www.cnblogs.com/wenxuehai/p/12357898.html#_label3)"},{"id":"mdx-blog","metadata":{"permalink":"/blog/mdx-blog","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-07-mdx-blog.mdx","source":"@site/blog/2023-01-07-mdx-blog.mdx","title":"MDX Blog","description":"\u535a\u5ba2\u6587\u7ae0\u652f\u6301Docusaurus Markdown \u7279\u6027, \u4f8b\u5982 MDX","date":"2023-01-07T00:00:00.000Z","formattedDate":"2023\u5e741\u67087\u65e5","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"MDX","permalink":"/blog/tags/mdx"}],"readingTime":0.235,"hasTruncateMarker":false,"authors":[{"name":"Lucky Duck","title":"front-end fans","url":"https://github.com/CodeIceCream","imageURL":"https://avatars.githubusercontent.com/u/80355864?s=400&u=ad960889029ff8a72aca84233c7c3f5eb54cc8a3&v=4","key":"luckyduck"}],"frontMatter":{"slug":"mdx-blog","title":"MDX Blog","authors":["luckyduck"],"tags":["docusaurus","MDX"]},"prevItem":{"title":"Git ChangeId","permalink":"/blog/git-changeId"},"nextItem":{"title":"Docusaurus Blog","permalink":"/blog/docusaurus-blog"}},"content":"\u535a\u5ba2\u6587\u7ae0\u652f\u6301[Docusaurus Markdown \u7279\u6027](https://docusaurus.io/docs/markdown-features), \u4f8b\u5982 [MDX](https://mdxjs.com/)\\r\\n\\r\\n:::tip\\r\\n\\r\\n\u4f7f\u7528React\u7684\u5f3a\u5927\u529f\u80fd\u521b\u5efa\u4ea4\u4e92\u5f0f\u535a\u5ba2\u6587\u7ae0\\r\\n\\r\\n```js\\r\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\r\\n```\\r\\n\\r\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\r\\n\\r\\n:::"},{"id":"docusaurus-blog","metadata":{"permalink":"/blog/docusaurus-blog","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-06-docusaurus-blog/index.md","source":"@site/blog/2023-01-06-docusaurus-blog/index.md","title":"Docusaurus Blog","description":"Docusaurus \u535a\u5ba2\u529f\u80fd \u7531 \u535a\u5ba2\u63d2\u4ef6 \u63d0\u4f9b\u652f\u6301\u3002","date":"2023-01-06T00:00:00.000Z","formattedDate":"2023\u5e741\u67086\u65e5","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.74,"hasTruncateMarker":false,"authors":[{"name":"Lucky Duck","title":"front-end fans","url":"https://github.com/CodeIceCream","imageURL":"https://avatars.githubusercontent.com/u/80355864?s=400&u=ad960889029ff8a72aca84233c7c3f5eb54cc8a3&v=4","key":"luckyduck"}],"frontMatter":{"slug":"docusaurus-blog","title":"Docusaurus Blog","authors":["luckyduck"],"tags":["docusaurus"]},"prevItem":{"title":"MDX Blog","permalink":"/blog/mdx-blog"}},"content":"Docusaurus [\u535a\u5ba2\u529f\u80fd](https://docusaurus.io/docs/blog) \u7531 [\u535a\u5ba2\u63d2\u4ef6](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) \u63d0\u4f9b\u652f\u6301\u3002\\r\\n\\r\\n\u53ea\u9700\u5c06Markdown\u6587\u4ef6\uff08\u6216\u6587\u4ef6\u5939\uff09\u6dfb\u52a0\u5230 `blog` \u76ee\u5f55\u3002\\r\\n\\r\\n\u535a\u5ba2\u4f5c\u8005\u5217\u8868\u53ef\u4ee5\u6dfb\u52a0\u5230 `authors.yml` \u3002\\r\\n\\r\\n\u535a\u5ba2\u6587\u7ae0\u6807\u9898\u4e0b\u65b9\u7684\u65e5\u671f\u662f\u4ece\u6587\u4ef6\u540d\u4e2d\u63d0\u53d6\u7684\uff0c\u4f8b\u5982\uff1a\\r\\n\\r\\n- `2019-05-30-welcome.md`\\r\\n- `2019-05-30-welcome/index.md`\\r\\n\\r\\n\u5219\u8be5\u9875\u535a\u5ba2\u4f1a\u88ab\u8ba4\u4e3a\u662f\u5728 `2019-05-30` \u8fd9\u4e2a\u65f6\u95f4\u5199\u7684\u3002\\r\\n\\r\\n\u535a\u5ba2\u6587\u7ae0\u6587\u4ef6\u5939\u53ef\u4ee5\u65b9\u4fbf\u5730\u5171\u540c\u5b9a\u4f4d\u535a\u5ba2\u6587\u7ae0\u56fe\u50cf\uff1a\\r\\n\\r\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\r\\n\\r\\n\u535a\u5ba2\u4e5f\u652f\u6301\u6807\u7b7e\uff01\\r\\n\\r\\n**\u5982\u679c\u4f60\u4e0d\u60f3\u8981\u535a\u5ba2\u4e00\u680f**: \u5220\u9664 `blog` \u76ee\u5f55, \u5e76\u5728\u4f60\u7684Docusaurus\u914d\u7f6e\u6587\u4ef6\u4f7f\u7528 `blog: false`\u3002"}]}')}}]);
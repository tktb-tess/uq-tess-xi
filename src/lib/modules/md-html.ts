import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeRemark from 'rehype-remark';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import remarkStringify from 'remark-stringify';
import rehypeSanitize from 'rehype-sanitize';
import rehypeShiki from '@shikijs/rehype';

export const mdToHtml = async (md: string) => {
  const vFile = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeShiki, {
      theme: 'github-dark',
    })
    .use(rehypeStringify)
    .process(md);

  return vFile.toString();
};

export const htmlToMd = async (html: string) => {
  const vFile = await unified()
    .use(rehypeParse)
    .use(rehypeSanitize)
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: '-',
      rule: '-',
    })
    .process(html);

  return vFile.toString();
};

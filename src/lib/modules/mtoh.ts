import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import remarkDirective from 'remark-directive';
import rehypeRemark from 'rehype-remark';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import remarkStringify from 'remark-stringify';
import rehypeSanitize from 'rehype-sanitize';
import rehypeShiki from '@shikijs/rehype';
import { tableHandler, textDirectiveHandler } from './handlers';

export const mdToHtml = async (md: string) => {
  const vFile = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkMath)
    .use(remarkRehype, {
      handlers: {
        table: tableHandler,
        textDirective: textDirectiveHandler,
      },
    })
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

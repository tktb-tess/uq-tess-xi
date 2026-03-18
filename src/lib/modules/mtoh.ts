import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import remarkDirective from 'remark-directive';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import { tableHandler, textDirectiveHandler } from './handlers';
import type { Processor } from 'unified';
import type * as Mdast from 'mdast';
import type * as Hast from 'hast';

type Proc = Processor<Mdast.Root, Mdast.Root, Hast.Root, Hast.Root, string>;

let processor: Proc | null = null;

export const mdToHtml = async (md: string) => {
  if (!processor) {
    processor = unified()
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
      .use(rehypeStringify);
  }

  const vFile = await processor.process(md);

  return vFile.toString();
};

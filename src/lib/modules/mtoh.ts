import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import remarkDirective from 'remark-directive';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import * as H from './handlers';
import type { Processor } from 'unified';
import type * as Mdast from 'mdast';
import type * as Hast from 'hast';

type Proc = Processor<Mdast.Root, Mdast.Root, Hast.Root, Hast.Root, string>;

let processor: Proc | undefined;

export const mdToHtml = async (md: string) => {
  if (!processor) {
    processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkDirective)
      .use(remarkMath)
      .use(remarkRehype, {
        handlers: {
          table: H.tableHandler,
          textDirective: H.textDirectiveHandler,
        },
      })
      .use(rehypeKatex)
      .use(rehypeShiki, {
        theme: 'github-dark',
      })
      .use(rehypeStringify)
      .freeze();
  }

  const vFile = await processor.process(md);

  return vFile.toString();
};

import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import rehypeRemark from 'rehype-remark';
import rehypeParse from 'rehype-parse';
import remarkStringify from 'remark-stringify';
import rehypeSanitize from 'rehype-sanitize';
import type { Processor } from 'unified';
import type * as Mdast from 'mdast';
import type * as Hast from 'hast';

type Proc = Processor<Hast.Root, Hast.Root, Mdast.Root, Mdast.Root, string>;

let processor: Proc | null = null;

export const htmlToMd = async (html: string) => {
  if (!processor) {
    processor = unified()
      .use(rehypeParse)
      .use(rehypeSanitize)
      .use(rehypeRemark)
      .use(remarkGfm)
      .use(remarkStringify, {
        bullet: '-',
        bulletOther: '+',
        rule: '-',
      });
  }

  const vFile = await processor.process(html);

  return vFile.toString();
};

import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import rehypeRemark from 'rehype-remark';
import rehypeParse from 'rehype-parse';
import remarkStringify from 'remark-stringify';
import rehypeSanitize from 'rehype-sanitize';

export const htmlToMd = async (html: string) => {
  const processor = unified()
    .use(rehypeParse)
    .use(rehypeSanitize)
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: '-',
      rule: '-',
    });

  const vFile = await processor.process(html);

  return vFile.toString();
};

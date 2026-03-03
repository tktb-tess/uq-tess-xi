import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import rehypeRemark from 'rehype-remark';
import rehypeParse from 'rehype-parse';
import remarkStringify from 'remark-stringify';
import rehypeSanitize from 'rehype-sanitize';

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

import clsx from 'clsx'

export type ProseProps = {
  className?: string
  content?: string
}
export function Prose({ content, className }: ProseProps) {
  return <div className={clsx(className, 'prose dark:prose-invert')} dangerouslySetInnerHTML={{ __html: content }} />
}

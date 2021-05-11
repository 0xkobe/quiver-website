import GenerateTextComponent from './_generator'

const Headline = GenerateTextComponent({
  tag: 'span',
  className: 'text-base leading-6 font-semibold tracking-wide uppercase',
  color:
    'bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
})

export default Headline

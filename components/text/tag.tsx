import GenerateTextComponent from "./_generator";

const Tag = GenerateTextComponent({
  tag: "span",
  className:
    "px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide rounded-full",
  color: "text-white bg-gradient-to-r from-primary to-secondary",
});

export default Tag;

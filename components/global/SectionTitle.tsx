import { Separator } from "../ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="capitalize font-medium text-2xl sm:text-3xl tracking-wider mb-4 sm:mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
}
export default SectionTitle;

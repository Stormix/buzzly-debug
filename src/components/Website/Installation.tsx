import CopyButton from "./CopyButton.tsx";

export default function Installation() {
  return (
    <section className="w-1/3 mb-4 sm:w-[80%] xl:w-1/2 2xl:w-1/3">
      <div>
        <h2 className="font-semibold  mb-2 text-white">
          Installation
        </h2>
        <div
        
          className=" border bg-[#111111] border-[#2e2e2d] flex justify-between items-center p-2 px-5 rounded "
        >
          <p className="codeBlock text-sm text-white">
            <span className="text-[#00BBFF]">npm</span> install Buzzly
          </p>
          <CopyButton text="npm install Buzzly" />
        </div>
      </div>
    </section>
  );
}

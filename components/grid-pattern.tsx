export type GridPatternProps = {};

const GridPattern = ({}: GridPatternProps) => {
  return (
    <>
      <svg
        className="stroke-neutral-5/90 -z-10 dark:stroke-neutralDark-5/90 absolute inset-0 h-full w-full
        [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent,black)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={97}
            height={97}
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M97 97V98H98V97H97ZM96 0V97H98V0H96ZM97 96H0V98H97V96Z"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#grid-pattern)"
        />
      </svg>
    </>
  );
};

export default GridPattern;

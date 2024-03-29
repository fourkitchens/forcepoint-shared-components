import { TokenType, TokensType } from '../types';

export type BorderProps = {
  borders: TokensType;
};

export default function Border({ borders }: BorderProps) {
  const renderItem = ([key, value]: [string, TokenType], index: number) => {
    const border = typeof value === 'string' ? value : '';

    return (
      <li
        key={index}
        className="flex flex-col gap-lg md:flex-row md:items-center"
      >
        <div className="flex flex-row gap-md items-center">
          <p className="text-md text-grey md:w-xxl">border-{border}</p>
          <p className="text-md text-grey md:w-xxl">{key}</p>
          <p className="text-md text-center text-grey">{border}</p>
        </div>
        {/* Swatch */}
        <span className={`flex-1 border-teal text-body-3 border-b-none border-x-none ${key}`}></span>
      </li>
    );
  };

  return (
    <div className="p-md">
      <h2 className="mb-lg text-h3">Border</h2>
      <ul className="flex flex-col gap-lg">
        {Object.entries(borders as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}

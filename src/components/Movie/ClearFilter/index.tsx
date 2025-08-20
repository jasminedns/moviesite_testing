type ClearFilterProps = {
    onClear: () => void;
}

const ClearFilter = ({onClear}:ClearFilterProps) => {
    return (
        <button
            onClick={onClear}
            className={`bg-[#093A3E] p-3 font-bold cursor-pointer w-[135px] rounded-2xl`}
        >
            Clear Filter
        </button>
    )
}

export default ClearFilter;
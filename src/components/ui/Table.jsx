import React from 'react';

const Table = ({ columns, data }) => {
    return (
        <div className="overflow-x-auto w-full rounded-md shadow-lg">
            <table className="w-full border-collapse text-left text-sm font-medium">
                <thead className="bg-[#c7855f]">
                <tr>
                    {columns.map((column) => (
                        <th key={column.key} className="px-4 py-2 border-1 border-gray-500">{column.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody className={"bg-orange-100"}>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 ">
                        {columns.map((column) => (
                            <td key={column.key} className="px-4 py-1 border-1 border-gray-300 font-medium">
                                {column.render
                                    ? column.render(row)
                                    : row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

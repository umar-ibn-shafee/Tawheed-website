import { FC } from "react";

const Salah_Board: FC = () => {
    const data = [
        { salah: "Fajr", timings: { adhan: "4:30 AM", iqamah: "4:55 AM" } },
        { salah: "Fajr", timings: { adhan: "4:30 AM", iqamah: "4:55 AM" } },
        { salah: "Fajr", timings: { adhan: "4:30 AM", iqamah: "4:55 AM" } },
        { salah: "Fajr", timings: { adhan: "4:30 AM", iqamah: "4:55 AM" } },
        { salah: "Fajr", timings: { adhan: "4:30 AM", iqamah: "4:55 AM" } }
    ]
    return (
        <div className="bg-blue-400 border-4 rounded-xl border-blue-900 w-1/3 ml-2">
            Salah Board
            <div className="table w-full">Prayer Timings</div>
            <div className="table-header-group">
                <div className="table-row">
                    <div className="table-cell">Salah</div>
                    <div className="table-cell">Adhan</div>
                    <div className="table-cell">Iqamah</div>
                </div>
            </div>
            <div className="table-row-group">
                {data.map(item => (
                    <div className="table-row">
                        <div className="table-cell">{item.salah}</div>
                        <div className="table-cell">{item.timings.adhan}</div>
                        <div className="table-cell">{item.timings.iqamah}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Salah_Board;
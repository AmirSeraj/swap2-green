/* eslint-disable react/prop-types */
import {Progress} from "@nextui-org/progress";
import {useData} from "../Context.jsx";
import TrophyLevel from "../TrophyLevel.jsx";

function EnergyProgress({topNotShow}) {
    const {energy, energyLimit} = useData();

    return (
        <div className={'flex flex-col gap-1 w-full'}>
            {
                !topNotShow && <TrophyLevel />
            }
            <Progress
                size="md"
                radius="sm"
                classNames={{
                    base: "max-w-md",
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-blue-300 via-purple-300 to-green-400",
                    label: "tracking-wider font-medium text-default-600",
                    value: "text-foreground/60",
                }}
                value={(energy / (energyLimit * 500)) * 100}
                // value={60}
                color={'success'}
            />
        </div>
    );
}

export default EnergyProgress;
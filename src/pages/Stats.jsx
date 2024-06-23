const Stats = () => {
    // eslint-disable-next-line react/prop-types
    const Item = ({desc, number, icon}) => {
        return (
            <div className={'flex flex-col gap-2.5 items-center justify-center w-full p-3'}>
                <p className={'text-black text-sm text-center'}>{desc}</p>
                <div className={'flex justify-center items-center gap-2'}>
                    {icon && <img src={'./coin.png'} alt="coin" className={'h-7 w-7'}/>}
                    <p className={'text-black text-xl'}>{Number(number).toLocaleString()}</p>
                </div>
            </div>
        )
    }
    return (
        <div
            className={'flex flex-col gap-3 w-full h-full pt-5 bg-grid-gray-700/[0.1] relative items-center'}>
            <Item desc={'Total Share Balance'} number={28166455852} icon={true}/>
            <div className={'w-full h-[1px] bg-black mt-1 mb-3'}/>
            <Item desc={'Total Touches'} number={9165895624}/>
            <Item desc={'Total Players'} number={2154588}/>
            <Item desc={'Daily Players'} number={254588}/>
            <Item desc={'Players Online'} number={1258488}/>
        </div>
    )
}

export default Stats
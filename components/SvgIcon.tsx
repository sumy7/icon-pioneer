import React, {useMemo} from 'react'

interface SvgIconProps {
    name: string
    [key: string]: any
}

const SvgIcon = (props: SvgIconProps) => {
    const {name, ...otherProps} = props
    const iconName = useMemo(() => {
        return `icon-${name}`
    }, [name])

    return <svg {...otherProps} className="svg-icon" aria-hidden="true">
        <use xlinkHref={iconName} />
    </svg>
}

export default SvgIcon

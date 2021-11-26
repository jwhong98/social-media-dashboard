import React from 'react'
import OverviewBox from '../OverviewBox';
import { OverviewContainer, OverviewWrapper, OverviewHeader, OverviewBody } from './OverViewElements';
import data from './overviewStats.json';

const Overview = () => {

    const createBox = (stats) => {
        return (
            <OverviewBox 
                key={stats.id}
                label={stats.label}
                icon={stats.icon}
                count={stats.count}
                positiveChange={stats.positiveChange}
                changeIcon={stats.changeIcon}
                percentChange={stats.percentChange}
            />
        )
    }
    return (
        <OverviewContainer>
            <OverviewWrapper>
                <OverviewHeader>Overview - Today</OverviewHeader>
                <OverviewBody>
                    {data.map(createBox)}
                </OverviewBody>
            </OverviewWrapper>
        </OverviewContainer>
    )
}

export default Overview;

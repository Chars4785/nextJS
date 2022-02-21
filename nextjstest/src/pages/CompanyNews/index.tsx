import { useEffect } from "react"
import useGetCompanyNews from '../../hocs/useGetCompanyNews';
import style from './CompanyNews.module.scss';
import _ from 'lodash';

const CompanyNews = (props) =>{
    const { isLoading, isError, data, error } = useGetCompanyNews();

    if( isLoading ){
        <div>
            ...Loading
        </div>
    }
    
    const renderCard = () =>{
        return _.map( data.contents ,( companyData ) =>
            <div className={style.cnt}>
                <div className={style.cntWrap}>
                    <img src={companyData.imageUrl} />
                    <div className={style.cntContainer}>
                        <img height="50" width="50" src='images/heart-431.svg'/>
                        <div>
                            { companyData.contentsURL }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={style.root}>
            { data && renderCard()}
        </div>
    )
}

export default CompanyNews


import { useEffect } from "react"
import useGetCompanyNews from '../../hocs/useGetCompanyNews';
import style from './CompanyNews.module.scss';
import _ from 'lodash';
import CardGrid from "../../components/blocks/CardGrid/CardGrid";

const CompanyNews = (props) =>{
    const { isLoading, isError, data, error } = useGetCompanyNews();

    if( isLoading ){
        <div>
            ...Loading
        </div>
    }
    
    const renderCard = () =>{
        return _.map( data.contents ,( companyData ) =>
            <div className={style.cntWrap}>
                <img src={companyData.imageUrl} />
                <div className={style.cntContainer}>
                    <img height="50" width="50" src='images/heart-431.svg'/>
                    <div>
                        { companyData.contentsURL }
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={style.root}>
            { data && 
                // <CardGrid>
                //     {
                //         _.map( data.contents ,( companyData ) =>
                //             <div>
                //                 <img src={companyData.imageUrl} />
                //                 <div>
                //                     <img height="50" width="50" src='images/heart-431.svg'/>
                //                     <div>
                //                         { companyData.contentsURL }
                //                     </div>
                //                 </div>
                //             </div>
                //         )
                //     }
                // </CardGrid>
                renderCard()
            }
        </div>
    )
}

export default CompanyNews


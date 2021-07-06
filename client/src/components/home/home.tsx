import React, { ReactElement } from 'react'
import {REACT_API} from '../../constants'
import {useTypeSelector} from '../../hooks/useTypeSelector'

interface Props {
    
}
    
    
    export default function Home({}: Props): ReactElement {
        const { currentUser } = useTypeSelector((state) => state.user);
    console.log(currentUser);   

    

    return (
        <div>
            <img style={{width: '100%'}} src={REACT_API + `5878d822-3477-453c-8f99-4b4f1e685ca1.jpg`} alt="" />
        </div>
    )
}

import { MouseEvent, useContext, useEffect } from "react";
import { ICompetitionData } from "../../dto/Competition/ICompetitionData";

import jwt_decode from "jwt-decode";
import React, { useRef, useState } from 'react';
import { JwtContext } from "../Root";
import { IUserAtCompetitionData } from "../../dto/UserAtCompetition/IUserAtCompetitionData";
import { CompetitionService } from "../../Services/Competition Service/CompetitionService";
import { useParams } from "react-router-dom";
import { IUserInfoProps } from "../../dto/IUserInfoProps";
import { IUserAtCompetitionDataRemove } from "../../dto/UserAtCompetition/IUserAtCompetitionDataRemove";
import { IUserAtTrainingRemoveData } from "../../dto/UserAtTraining/IUserAtTrainingRemoveData";


interface IProps {
    values: IUserAtTrainingRemoveData;

    validationErrors: string[];

    handleChange: (target: EventTarget & HTMLInputElement | HTMLSelectElement) => void;

    onSubmit: (event: MouseEvent) => void;

}



const UserAtTrainingRemoveForm = (props: IProps) => {

    const { id } = useParams()
    
    const cleanId = id!.replace('id:', '');

   
    return (
        <form className="form-signin w-100 m-auto">
            <input type="checkbox" name="id" value={cleanId} onChange={(e) => props.handleChange(e.target)}/>
            <label className="form-check-label">
            <b>Remove from this training?</b>
            </label>
            <button
                onClick={(e) => props.onSubmit(e)}
                id="registerSubmit" className="w-100 btn btn-lg btn-primary">Leave training</button>

        </form>
    );
}

export default UserAtTrainingRemoveForm;

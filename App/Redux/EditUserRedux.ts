import { createReducer, createActions } from 'reduxsauce';
import uuid from 'uuid/v1';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addJob: ['job'],
  addEducation: ['education'],
  setJobs: ['jobs'],
  setEducations: ['educations'],
	addUserEducations: ['educations'],
	reset: [],
	deleteEducation: ['id'],
	deleteExperience: ['id']
});

export const EditUserTypes = Types;
export default Creators;

export const INITIAL_STATE = {
	jobsAdded: [],
	educationsAdded: [],
	jobs: [],
	educations: []
};

export const setEducations = (state, action) => {
	const { educations } = action;
	return {
		...state,
		educations: educations.map(function(e) {
			return { ...e, deleted: false, edited: false }
		})
	}
};

export const setJobs = (state, action) => {
	const { jobs } = action;
	return {
		...state,
		jobs: jobs.map(function(e) {
			return { ...e, deleted: false, edited: false }
		})
	}
};

export const addEducation = (state, action) => {
	const { education } = action;
	return {
		...state,
		educationsAdded: state.educationsAdded.concat([{ ...education, _id: uuid() }])
	}
};

export const addJob = (state, action) => {
	const { job } = action;
	return {
		...state,
		jobsAdded: state.jobsAdded.concat([{ ...job, _id: uuid() }])
	}
};

export const deleteEducation = (state, action) => {
	const { id } = action;

	return {
		...state,
		educationsAdded: state.educationsAdded.map(function(e) {
			return { ...e, deleted: e._id == id ? true : e.deleted }
		}),
		educations: state.educations.map(function(e) {
			return { ...e, deleted: e._id == id ? true : e.deleted }
		})
	}
};

export const deleteExperience = (state, action) => {
	const { id } = action;
	return {
		...state,
		jobsAdded: state.jobsAdded.map(function(e) {
			return { ...e, deleted: e._id == id ? true : e.deleted }
		}),
		jobs: state.jobs.map(function(e) {
			return { ...e, deleted: e._id == id ? true : e.deleted }
		})
	}
};

export const reset = (state, action) => {
	return INITIAL_STATE;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_JOB]: addJob,
  [Types.ADD_EDUCATION]: addEducation,
  [Types.SET_JOBS]: setJobs,
	[Types.SET_EDUCATIONS]: setEducations,
	[Types.RESET]: reset,
	[Types.DELETE_EDUCATION]: deleteEducation,
	[Types.DELETE_EXPERIENCE]: deleteExperience
});
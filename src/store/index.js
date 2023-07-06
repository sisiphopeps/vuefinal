import {createStore} from 'vuex';
const dataUrl = 'https://sisiphopeps.github.io/Vue.json/data/'
export default createStore({
  state: {
    projects: null,
    testimonials: null,
    skills: null,
    education: null,
    
  },
 
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;},   
    setTestimonials: (state, testimonials) => {
        state.testimonials = testimonials;},    
  setSkills: (state, skills) => {
          state.skills = skills;},
  setEducation: (state, education) => {
            state.education = education;
  },
},
getters:{},
  actions: {
  async fetchProjects(context){
    try{
      let res = await fetch (dataUrl);
      let {projects}= await res.json();
      context.commit('setProjects', projects);

    }catch(e){
      console.log(e.message);
    }
  },
  async fetchTestimonials(context){
    try{
      let res = await fetch (dataUrl);
      let {testimonials}= await res.json();
      context.commit('setTestimonials', testimonials);

    }catch(e){
      console.log(e.message);
    }
  },
  async fetchSkills(context){
    try{
      let res = await fetch (dataUrl);
      let {skills}= await res.json();
      context.commit('setSkills', skills);

    }catch(e){
      console.log(e.message);
    }
  },
  async fetchEducation(context){
    try{
      let res = await fetch (dataUrl);
      let {education}= await res.json();
      context.commit('setEducation', education);

    }catch(e){
      console.log(e.message);
    }
  }
  },
modules:{

}
});


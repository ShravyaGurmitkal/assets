class Job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Education {
    constructor(id, title, school, address, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class CV {
    constructor(email) {
        this.jobs = [];
        this.educations = [];
        this.email = email;
    }
  
    addJob(job) {
      // add functionality here
      if(job instanceof Job) {
        this.jobs.push(job);
      } else {
        console.log(`Not a Job`);
      }
     
    }
  
    removeJob(job) {
      // add functionality here
      if(job instanceof Job) {
        const indexToRemove = this.jobs.indexOf(job);
        this.jobs.splice(indexToRemove, 1);
      } else {
          console.log(`Not a Job`);
      }
    }
  
    addEducation(education) {
      // add functionality here
      if(education instanceof Education) {
        this.educations.push(education);
      } else {
        console.log(`Not an education`);
      }
    }
  
    removeEducation(education) {
      // add functionality here
      if(education instanceof Education) {
        const indexToRemove = this.educations.indexOf(education);
        this.educations.splice(indexToRemove, 1);
      } else {
        console.log(`Not an education`);
      }
      
    }

    renderCV() {
        function toDisplay(arrayToAppend, whichArray) {
            arrayToAppend.forEach(arrayElement => {
                const h1 = document.createElement('h1');
                h1.innerHTML = `${whichArray} ${arrayToAppend.indexOf(arrayElement) + 1}`;
                document.body.appendChild(h1);
                const arrayElementUl = document.createElement('ul');
                document.body.appendChild(arrayElementUl);
                for(const key in arrayElement) {
                    const arrayElementLi = document.createElement('li');
                    arrayElementLi.innerHTML = `${key} : ${arrayElement[key]}`;
                    arrayElementUl.appendChild(arrayElementLi);
                }
            });
        }

        toDisplay(this.jobs, 'Job');
        toDisplay(this.educations, 'Education');
    }
}

let myCV = new CV(`abc@gmail.com`);

let job1 = new Job(1, 'job_1', 'description about job1', `12/03/2020`, `3/10/2022`);
let job2 = new Job(2, 'job_2', 'description about job2', `12/03/2020`, `3/10/2022`);
let job3 = new Job(3, 'job_3', 'description about job3', `12/03/2020`, `3/10/2022`);

let education1 = new Education(1, `education_1`, `HYF school`, 'Copenhagen', `12/03/2020`, `3/10/2022`);
let education2 = new Education(2, `education_2`, `HYF school`, 'Copenhagen', `12/03/2020`, `3/10/2022`);
let education3 = new Education(3, `education_3`, `HYF school`, 'Copenhagen', `12/03/2020`, `3/10/2022`);

myCV.addJob(job1);
myCV.addJob(job2);
myCV.addJob(job3);

myCV.addEducation(education1);
myCV.addEducation(education2);
myCV.addEducation(education3);

console.log(myCV);

myCV.removeJob(job2);
myCV.removeEducation(education2);
myCV.removeJob(education1);
myCV.removeEducation(job1);

console.log(myCV);

myCV.renderCV();
import { Injectable, NotFoundException,  } from '@nestjs/common';
import { Course } from './couser.model';

@Injectable()
export class CourseService {
    //get retorna
    
    private courses: Course[] = [];

    getAllCourses(): Course[]{

        return this.courses;

    }

    findCourseById(id: number): Course{

        const course = this.courses.find(course => course.id == id);

        if(!course){
            throw new NotFoundException('Id não encontrado!');
        }

        return course;

    }

    createCourse(course: Course): Course{

        const newId = this.courses.length > 0 ? Math.max(...this.courses.map(course => course.id)) + 1 : 1;

        const  newCourse: Course = {id: newId, ...course};

        this.courses.push(newCourse);

        return newCourse;

    }

    updateCourse(id: number, course: string): Course{

        const index = this.courses.findIndex (course => course.id == id);

        if(index != -1){

            const updateCourse = {id, ...course};

            this.courses[index] = updateCourse;

            return updateCourse
        }

        return null;
    }

    deleteCourse(id: number): void{
        
        const index = this.courses.findIndex (course => course.id == id);

        if(index != 1){
            this.courses.splice(index, 1)
        }
    }
}

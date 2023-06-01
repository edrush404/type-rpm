import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Course } from './couser.model';
import { CourseService } from './couser.service';

@Controller('couser')
export class CouserController {
    constructor(private readonly CourseService: CourseService){}

    @Get()
    getAllCourses(): Course[]{
        return this.CourseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id): Course{
        return this.CourseService.findCourseById(id);
    }

    @Post()
    createCourse(@Body() course: Course ): Course{
        return this.CourseService.createCourse(course);
    }

    @Put(':id')
    updateCourse(@Param('id') id: number, @Body() course: Course): Course{
        return this.CourseService.updateCourse(id, course)
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: number): void{
        this.CourseService.deleteCourse(id)
    }

}

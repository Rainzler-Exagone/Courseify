"use client"
import React, { useState } from 'react';
import {  Search } from 'lucide-react';
import CourseCard from './CourseCard';
import Link from 'next/link';
import { Slider } from './ui/slider';
import { Course } from '@/types/course';

interface Filters {
  search: string;
  level: string;
  category: string;
  duration: number;
}



function CoursesGrid({initialData}:{initialData:Course[]}) {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    level: '',
    category: '',
    duration: 5,
  });

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const categories = ['Law', 'Business', 'Tech'];

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };


 
   // Client-side filtering function
   const filteredData: Course[] = initialData.filter((item: Course) => {
    // Search filter
    if (filters.search && !item.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Level filter
    if (filters.level && item.level.toLowerCase() !== filters.level.toLowerCase()) {
      return false;
    }
    
    // Category filter
    if (filters.category && item.category.toLowerCase() !== filters.category.toLowerCase()) {
      return false;
    }
    
    // Duration filter
    if (item.duration > filters.duration) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6 ">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>

          {/* Filters Section */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Level Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
              <select
              title='select-co'
                className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
              >
                <option value="">All Levels</option>
                {levels.map((level) => (
                  <option key={level} value={level.toLowerCase()}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
              title='select-co'
                className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Slider */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration: {filters.duration} hours
              </label>
              {/* <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg CoursesGridearance-none cursor-pointer"
              /> */}
                <Slider
        min={0}
        max={10}
        step={0.5}
        value={[filters.duration]}
        onValueChange={(val) => handleFilterChange("duration", val[0])}
        className="w-full  bg-gray-200 rounded-lg CoursesGridearance-none cursor-pointer"
        />
               {/* <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      
    /> */}
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.search && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Search: {filters.search}
              </span>
            )}
            {filters.level && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Level: {filters.level}
              </span>
            )}
            {filters.category && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Category: {filters.category}
              </span>
            )}
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
              Duration: {filters.duration}h
            </span>
          </div>
        </div>

        {/* Debug Panel */}
    

         <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
         {
          filteredData.map((course: Course)=>(
         <Link key={course.id} href={`courses/${course.id}`}><CourseCard  course={course}/></Link>
          ))
        }
    
         </div>
      </div>
    </div>
  );
}

export default CoursesGrid;
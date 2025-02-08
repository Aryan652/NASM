import React from 'react';
import { Users, GraduationCap, BookOpen, Trophy, Clock, Calendar } from 'lucide-react';

const Status = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      label: 'Active Students',
      value: '2,500+',
      trend: '+15% this year'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      label: 'Graduates',
      value: '15,000+',
      trend: 'Since establishment'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      label: 'Courses',
      value: '50+',
      trend: 'Across 6 departments'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      label: 'Awards',
      value: '25+',
      trend: 'For academic excellence'
    }
  ];

  const currentStatus = {
    semester: 'Fall 2024',
    enrollmentStatus: 'Open',
    nextIntake: 'January 2025',
    upcomingEvents: [
      'No Upcoming Event for now',
      ''
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              {stat.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{stat.label}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.trend}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Status Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Status Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Current Status</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Current Semester:</span>
              <span className="font-semibold">{currentStatus.semester}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Enrollment:</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {currentStatus.enrollmentStatus}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Intake:</span>
              <span className="font-semibold">{currentStatus.nextIntake}</span>
            </div>
          </div>
        </div>

        {/* Events Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Upcoming Events</h3>
          </div>
          <ul className="space-y-3">
            {currentStatus.upcomingEvents.map((event, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">{event}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Status;
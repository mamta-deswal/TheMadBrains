import React, { useState } from 'react';

const SubscriptionProcess = () => {
  const [selectedPlan, setSelectedPlan] = useState('Plan - B');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Design homepage layout', status: 'completed' },
    { id: 2, text: 'Create user authentication', status: 'completed' },
    { id: 3, text: 'Implement payment system', status: 'pending' }
  ]);
  const [newTask, setNewTask] = useState('');
  const [projects] = useState([
    { id: 1, name: 'Project ABC', status: 'active' },
    { id: 2, name: 'Project Overview', status: 'completed' },
    { id: 3, name: 'View Details Project', status: 'pending' }
  ]);

  const plans = ['Plan - A', 'Plan - B', 'Plan - C'];

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        status: 'pending'
      }]);
      setNewTask('');
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    ));
  };

  const StepCard = ({ number, title, description, children, isActive = false }) => (
    <div className={`bg-white rounded-2xl p-6 shadow-lg relative ${isActive ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="absolute -top-4 left-6 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      {children}
    </div>
  );

  const TaskItem = ({ task, onToggle }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2">
      <span className={`text-sm ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {task.text}
      </span>
      <div className="flex items-center space-x-2">
        <span className={`text-xs px-2 py-1 rounded-full ${
          task.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {task.status === 'completed' ? 'Accept' : 'Pending'}
        </span>
        <button
          onClick={() => onToggle(task.id)}
          className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          {task.status === 'completed' && (
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          )}
        </button>
      </div>
    </div>
  );

  const ProjectItem = ({ project }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2">
      <span className="text-sm text-gray-800">{project.name}</span>
      <div className={`w-3 h-3 rounded-full ${
        project.status === 'active' ? 'bg-green-500' : 
        project.status === 'completed' ? 'bg-blue-500' : 'bg-gray-400'
      }`}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="text-center py-12">
        <p className="text-blue-400 text-sm font-medium mb-2">How It Works</p>
        <h1 className="text-4xl font-bold mb-4">How Does Our Subscription Process Work?</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          With our UI/UX design subscription, getting high-quality, custom designs has never been easier. Simply 
          choose a plan that suits your needs.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1: Subscribe to a Plan */}
          <StepCard
            number="1"
            title="Subscribe to a Plan"
            description="Whether it's a short-term commitment or a long-term partnership, there's a plan that fits your needs."
            isActive={true}
          >
            <div className="space-y-3">
              {plans.map((plan) => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                    selectedPlan === plan 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan}
                </button>
              ))}
              {selectedPlan === 'Plan - B' && (
                <div className="absolute -right-2 top-16 w-0 h-0 border-l-8 border-l-orange-500 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
              )}
            </div>
          </StepCard>

          {/* Step 2: Submit Your Requests */}
          <StepCard
            number="2"
            title="Submit Your Requests"
            description="Add unlimited tasks to your dedicated project board. With our premium subscription UI design or a subscription page UI design? We've got that covered."
          >
            <div className="space-y-3">
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={toggleTaskStatus} />
              ))}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add new task..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg text-gray-800 text-sm"
                />
                <button
                  onClick={addTask}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  Add
                </button>
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">Request Accepted</span>
                </div>
              </div>
            </div>
          </StepCard>

          {/* Step 3: Review Daily Progress */}
          <StepCard
            number="3"
            title="Review Daily Progress"
            description="Stay in the loop about daily updates. Track your project's progress in real-time so you are always on the same page and get continuous feedback."
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-gray-800">Updates</span>
                <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs">↗</span>
                </div>
              </div>
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </StepCard>

          {/* Step 4: Perfect It Together */}
          <StepCard
            number="4"
            title="Perfect It Together"
            description="Using collaborative processes, and unlimited revisions, we polish the designs until you are 100% satisfied."
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">D</span>
                </div>
                <span className="text-sm text-gray-800">Designer</span>
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">D</span>
                </div>
                <span className="text-sm text-gray-800">Developer</span>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-800">Project New Updates</span>
                </div>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <span className="text-white text-sm">Post to Slack</span>
              </div>
            </div>
          </StepCard>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center pb-12">
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Start with $599 only
        </button>
      </div>
    </div>
  );
};

export default SubscriptionProcess;
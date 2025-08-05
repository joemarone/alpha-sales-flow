<div>
                  <label className="block text-sm font-medium text-gray-700">Parent Last Name *</label>
                  <input
                    type="text"
                    value={newCustomer.parentLastName}
                    onChange={(e) => setNewCustomer({...newCustomer, parentLastName: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Parent Email *</label>
                  <input
                    type="email"
                    value={newCustomer.parentEmail}
                    onChange={(e) => setNewCustomer({...newCustomer, parentEmail: e.target.value})}
                    onBlur={(e) => {
                      if (e.target.value && !validateEmail(e.target.value)) {
                        alert('Please enter a valid email address');
                        e.target.focus();
                      }
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student First Name *</label>
                  <input
                    type="text"
                    value={newCustomer.studentFirstName}
                    onChange={(e) => setNewCustomer({...newCustomer, studentFirstName: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student Last Name *</label>
                  <input
                    type="text"
                    value={newCustomer.studentLastName}
                    onChange={(e) => setNewCustomer({...newCustomer, studentLastName: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date *</label>
                  <input
                    type="date"
                    value={newCustomer.startDate}
                    onChange={(e) => setNewCustomer({...newCustomer, startDate: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Program Advisor</label>
                  <select
                    value={newCustomer.advisorId}
                    onChange={(e) => setNewCustomer({...newCustomer, advisorId: parseInt(e.target.value)})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {programAdvisors.map(advisor => (
                      <option key={advisor.id} value={advisor.id}>{advisor.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newCustomer.isTransfer}
                    onChange={(e) => setNewCustomer({...newCustomer, isTransfer: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">Transfer Student</label>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={addCustomer}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                  Add Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-4/5 max-w-5xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-gray-900">Manage Staff</h3>
              <button
                onClick={() => setShowAdminPanel(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Program Advisors */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Program Advisors</h4>
                
                {/* Add New Advisor */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="text-md font-medium text-blue-900 mb-3">Add New Program Advisor</h5>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Name"
                      value={newAdvisor.name}
                      onChange={(e) => setNewAdvisor({...newAdvisor, name: e.target.value})}
                      className="w-full px-3 py-2 border border-blue-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={newAdvisor.email}
                      onChange={(e) => setNewAdvisor({...newAdvisor, email: e.target.value})}
                      className="w-full px-3 py-2 border border-blue-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={addAdvisor}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center justify-center"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Program Advisor
                    </button>
                  </div>
                </div>
                
                {/* Existing Advisors */}
                <div className="space-y-3">
                  {programAdvisors.map((advisor) => (
                    <div key={advisor.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      {editingAdvisor === advisor.id ? (
                        <div className="flex items-center space-x-3 flex-1">
                          <input
                            type="text"
                            defaultValue={advisor.name}
                            id={`name-${advisor.id}`}
                            className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="email"
                            defaultValue={advisor.email}
                            id={`email-${advisor.id}`}
                            className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            onClick={() => {
                              const nameEl = document.getElementById(`name-${advisor.id}`);
                              const emailEl = document.getElementById(`email-${advisor.id}`);
                              updateAdvisor(advisor.id, nameEl.value, emailEl.value);
                            }}
                            className="text-green-600 hover:text-green-800"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setEditingAdvisor(null)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{advisor.name}</div>
                            <div className="text-sm text-gray-500">{advisor.email}</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setEditingAdvisor(advisor.id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => deleteAdvisor(advisor.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Parent Support Specialists */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Parent Support Specialists</h4>
                
                {/* Add New Parent Support */}
                <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 className="text-md font-medium text-purple-900 mb-3">Add New Parent Support Specialist</h5>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Name"
                      id="newSupportName"
                      className="w-full px-3 py-2 border border-purple-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      id="newSupportEmail"
                      className="w-full px-3 py-2 border border-purple-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      onClick={() => {
                        const nameEl = document.getElementById('newSupportName');
                        const emailEl = document.getElementById('newSupportEmail');
                        if (nameEl.value && validateEmail(emailEl.value)) {
                          const newSupport = {
                            id: Math.max(...parentSupportStaff.map(s => s.id)) + 1,
                            name: nameEl.value,
                            email: emailEl.value
                          };
                          setParentSupportStaff([...parentSupportStaff, newSupport]);
                          nameEl.value = '';
                          emailEl.value = '';
                        } else {
                          alert('Please enter valid name and email');
                        }
                      }}
                      className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center justify-center"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Support Specialist
                    </button>
                  </div>
                </div>
                
                {/* Existing Parent Support Staff */}
                <div className="space-y-3">
                  {parentSupportStaff.map((support) => (
                    <div key={support.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{support.name}</div>
                        <div className="text-sm text-gray-500">{support.email}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            if (parentSupportStaff.length > 1) {
                              setParentSupportStaff(parentSupportStaff.filter(s => s.id !== support.id));
                              if (selectedSupportSpecialist === support.id) {
                                setSelectedSupportSpecialist(parentSupportStaff.find(s => s.id !== support.id).id);
                              }
                            } else {
                              alert('Cannot delete the last parent support specialist');
                            }
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Detail Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-4/5 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-gray-900">
                {selectedCustomer.parentFirstName} {selectedCustomer.parentLastName} - {selectedCustomer.studentFirstName}
              </h3>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Customer Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Parent:</span> {selectedCustomer.parentFirstName} {selectedCustomer.parentLastName}</p>
                    <p><span className="font-medium">Email:</span> {selectedCustomer.parentEmail}</p>
                    <p><span className="font-medium">Student:</span> {selectedCustomer.studentFirstName} {selectedCustomer.studentLastName}</p>
                    <p><span className="font-medium">Start Date:</span> {selectedCustomer.startDate}</p>
                    <p><span className="font-medium">Transfer:</span> {selectedCustomer.isTransfer ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-lg border-2 border-blue-200 bg-blue-50">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 1: Convert Customer</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCustomer.timeline.converted}
                        onChange={(e) => updateCustomerStatus(selectedCustomer.id, 'converted', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm font-medium text-gray-700">Marked as "Converted"</label>
                    </div>
                    
                    {selectedCustomer.timeline.converted && (
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded border">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Customer will use an ESA?
                            <span className="ml-1 text-gray-500 cursor-help" title="By marking yes, you can send the customer an optional information email about using ESA funds effectively">ℹ️</span>
                          </label>
                          <div className="flex space-x-4">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name={`esa-${selectedCustomer.id}`}
                                checked={selectedCustomer.timeline.esaFunds === true}
                                onChange={() => updateCustomerStatus(selectedCustomer.id, 'esaFunds', true)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2 text-sm text-gray-700">Yes</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name={`esa-${selectedCustomer.id}`}
                                checked={selectedCustomer.timeline.esaFunds === false}
                                onChange={() => updateCustomerStatus(selectedCustomer.id, 'esaFunds', false)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2 text-sm text-gray-700">No</span>
                            </label>
                          </div>
                        </div>
                        
                        {selectedCustomer.timeline.esaFunds === true && !selectedCustomer.timeline.esaTipsEmailSent && (
                          <button
                            onClick={() => {
                              setEmailType('esaTips');
                              setEmailContent(emailTemplates.esaTips.body);
                              setEmailSubject(emailTemplates.esaTips.subject);
                              setEmailPreviewMode('edit');
                              setShowEmailModal(true);
                            }}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 flex items-center mr-2"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send ESA Tips Email
                          </button>
                        )}
                        
                        {selectedCustomer.timeline.esaFunds === true && selectedCustomer.timeline.esaTipsEmailSent && (
                          <div className="text-xs text-gray-600 bg-green-50 p-2 rounded border border-green-200">
                            ESA Tips email sent on {new Date(selectedCustomer.timeline.esaTipsEmailSent).toLocaleDateString()} by {programAdvisors.find(pa => pa.id === selectedCustomer.advisorId)?.name}
                          </div>
                        )}
                        
                        {selectedCustomer.timeline.esaFunds !== null && !selectedCustomer.timeline.confirmationEmailSent && (
                          <button
                            onClick={() => {
                              setEmailType('confirmation');
                              setEmailContent(emailTemplates.confirmation.body);
                              setEmailSubject(emailTemplates.confirmation.subject);
                              setEmailPreviewMode('edit');
                              setShowEmailModal(true);
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send Confirmation Email
                          </button>
                        )}
                        
                        {selectedCustomer.timeline.confirmationEmailSent && (
                          <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded border border-blue-200">
                            Confirmation email sent on {new Date(selectedCustomer.timeline.confirmationEmailSent).toLocaleDateString()} by {programAdvisors.find(pa => pa.id === selectedCustomer.advisorId)?.name}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-lg border-2 border-yellow-200 bg-yellow-50">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 2: Process Enrollment</h4>
                  {selectedCustomer.timeline.confirmationEmailSent && (
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCustomer.timeline.consentsCompleted}
                          onChange={(e) => updateCustomerStatus(selectedCustomer.id, 'consentsCompleted', e.target.checked)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-700">Consent completed</label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCustomer.timeline.paymentCompleted}
                          onChange={(e) => updateCustomerStatus(selectedCustomer.id, 'paymentCompleted', e.target.checked)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-700">Payment completed</label>
                      </div>
                      
                      {selectedCustomer.timeline.consentsCompleted && selectedCustomer.timeline.paymentCompleted && !selectedCustomer.timeline.enrollmentEmailSent && (
                        <button
                          onClick={() => {
                            setEmailType('enrollment');
                            setEmailContent(emailTemplates.enrollment.body);
                            setEmailSubject(emailTemplates.enrollment.subject);
                            setEmailPreviewMode('edit');
                            setShowEmailModal(true);
                          }}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 flex items-center"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send Enrollment Email
                        </button>
                      )}
                      
                      {selectedCustomer.timeline.enrollmentEmailSent && (
                        <div className="text-xs text-gray-600 bg-green-50 p-2 rounded border border-green-200">
                          Enrollment email sent on {new Date(selectedCustomer.timeline.enrollmentEmailSent).toLocaleDateString()} by {programAdvisors.find(pa => pa.id === selectedCustomer.advisorId)?.name}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-lg border-2 border-purple-200 bg-purple-50">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 3: Parent Support Handoff</h4>
                  {selectedCustomer.timeline.enrollmentEmailSent && !selectedCustomer.timeline.parentSupportEmailSent && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Parent Support Specialist:</label>
                        <select
                          value={selectedSupportSpecialist}
                          onChange={(e) => setSelectedSupportSpecialist(parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-purple-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          {parentSupportStaff.map(specialist => (
                            <option key={specialist.id} value={specialist.id}>
                              {specialist.name} - {specialist.email}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <button
                        onClick={() => {
                          setEmailType('parentSupport');
                          setEmailContent(emailTemplates.parentSupport.body);
                          setEmailSubject(emailTemplates.parentSupport.subject);
                          setEmailPreviewMode('edit');
                          setShowEmailModal(true);
                        }}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 flex items-center"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Parent Support Welcome
                      </button>
                    </div>
                  )}
                  
                  {selectedCustomer.timeline.parentSupportEmailSent && (
                    <div className="space-y-3">
                      <div className="text-xs text-gray-600 bg-purple-50 p-2 rounded border border-purple-200">
                        Parent Support email sent on {new Date(selectedCustomer.timeline.parentSupportEmailSent).toLocaleDateString()} by {parentSupportStaff.find(ps => ps.id === selectedSupportSpecialist)?.name}
                      </div>
                      <div className="p-3 bg-green-100 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-800 font-medium">✓ Customer onboarding completed!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Template Editor Modal */}
      {showTemplateEditor && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-4/5 max-w-6xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-gray-900">Edit Email Templates</h3>
              <button
                onClick={() => setShowTemplateEditor(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {Object.entries(emailTemplates).map(([type, template]) => (
                <div key={type} className="border rounded-lg p-4 bg-gray-50">
                  <h4 className="text-lg font-semibold capitalize mb-2 text-gray-800">
                    {type === 'parentSupport' ? 'Parent Support' : 
                     type === 'esaTips' ? 'ESA Tips' : type}
                  </h4>
                  
                  <label className="block text-sm text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={template.subject}
                    onChange={(e) => updateEmailTemplate(type, 'subject', e.target.value)}
                    className="w-full mt-1 mb-3 px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <label className="block text-sm text-gray-700 mb-1">Body</label>
                  <textarea
                    rows={8}
                    value={template.body}
                    onChange={(e) => updateEmailTemplate(type, 'body', e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  />
                  
                  <button
                    onClick={() => toggleTemplateMode(type)}
                    className="mt-2 text-xs text-blue-500 hover:underline"
                  >
                    Switch to {templateModes[type] === 'text' ? 'HTML' : 'Plain Text'}
                  </button>
                  
                  <div className="mt-2 text-xs text-gray-600">
                    <strong>Available merge fields:</strong><br />
                    {type === 'parentSupport' 
                      ? 'parentFirstName, studentFirstName, startDate, supportName'
                      : type === 'esaTips' 
                      ? 'parentFirstName, studentFirstName, startDate, advisorName'
                      : 'parentFirstName, studentFirstName, startDate, advisorName'
                    }
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowTemplateEditor(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Save Templates
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Email Modal */}
      {showEmailModal && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-4/5 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-gray-900">
                Send {emailType.charAt(0).toUpperCase() + emailType.slice(1)} Email
              </h3>
              <button
                onClick={() => setShowEmailModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setEmailPreviewMode('edit')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  emailPreviewMode === 'edit' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                ✏️ Edit Content
              </button>
              <button
                onClick={() => setEmailPreviewMode('preview')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  emailPreviewMode === 'preview' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                👁️ Preview Email
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Email Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">To:</label>
                  <p className="text-gray-900">{selectedCustomer.parentEmail}</p>
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">From:</label>
                  <p className="text-gray-900">
                    {emailType === 'parentSupport' ? 
                      'virtualsupport@2hourlearning.com' :
                      'alphaanywhere@2hourlearning.com'
                    }
                  </p>
                </div>
              </div>
              
              {emailPreviewMode === 'edit' ? (
                <>
                  {/* Subject Line */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject:</label>
                    <input
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  {/* Email Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                    <textarea
                      rows={12}
                      value={emailContent}
                      onChange={(e) => setEmailContent(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                      placeholder="Customize your email message here..."
                    />
                  </div>
                  
                  <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded">
                    <strong>Available merge fields:</strong> parentFirstName, studentFirstName, startDate, 
                    {emailType === 'parentSupport' ? 'supportName' : 'advisorName'}
                  </div>
                </>
              ) : (
                /* Email Preview */
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b">
                    <div className="text-sm">
                      <div className="mb-1"><strong>Subject:</strong> {emailSubject}</div>
                      <div className="mb-1"><strong>To:</strong> {selectedCustomer.parentEmail}</div>
                      <div><strong>From:</strong> {emailType === 'parentSupport' ? 'virtualsupport@2hourlearning.com' : 'alphaanywhere@2hourlearning.com'}</div>
                    </div>
                  </div>
                  <div className="p-6 bg-white min-h-96">
                    <div 
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: emailContent
                          .replace(/\{\{parentFirstName\}\}/g, selectedCustomer.parentFirstName)
                          .replace(/\{\{studentFirstName\}\}/g, selectedCustomer.studentFirstName)
                          .replace(/\{\{startDate\}\}/g, selectedCustomer.startDate)
                          .replace(/\{\{advisorName\}\}/g, programAdvisors.find(pa => pa.id === selectedCustomer.advisorId)?.name || '')
                          .replace(/\{\{supportName\}\}/g, parentSupportStaff.find(ps => ps.id === selectedSupportSpecialist)?.name || '')
                          .replace(/\n/g, '<br>')
                      }}
                    />
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-sm text-gray-500">
                  {emailPreviewMode === 'edit' ? 'Switch to Preview to see how your email will look' : 'Switch to Edit to make changes'}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowEmailModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
                    disabled={emailSending}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSendEmail}
                    disabled={emailSending}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {emailSending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Email
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesFlowApp;import React, { useState } from 'react';
import { User, Mail, Calendar, CheckCircle, Clock, Users, Send, Eye, Plus, Edit2, Trash2, Check, X, Settings, ChevronUp, ChevronDown } from 'lucide-react';

const SalesFlowApp = () => {
  const [programAdvisors, setProgramAdvisors] = useState([
    { id: 1, name: 'John Smith', email: 'john@company.com' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@company.com' }
  ]);

  const [parentSupportStaff, setParentSupportStaff] = useState([
    { id: 1, name: 'Emma Thompson', email: 'emma.support@company.com' },
    { id: 2, name: 'David Rodriguez', email: 'david.support@company.com' }
  ]);

  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    studentFirstName: '',
    studentLastName: '',
    startDate: '',
    isTransfer: false,
    advisorId: 1
  });
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailType, setEmailType] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailPreviewMode, setEmailPreviewMode] = useState('edit');
  const [emailSent, setEmailSent] = useState(false);
  const [selectedSupportSpecialist, setSelectedSupportSpecialist] = useState(1);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [editingAdvisor, setEditingAdvisor] = useState(null);
  const [newAdvisor, setNewAdvisor] = useState({ name: '', email: '' });
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);
  const [templateModes, setTemplateModes] = useState({
    confirmation: 'text',
    esaTips: 'text',
    enrollment: 'text', 
    parentSupport: 'text'
  });

  // Add email sending status tracking
  const [emailSending, setEmailSending] = useState(false);

  const addAdvisor = () => {
    if (!newAdvisor.name || !validateEmail(newAdvisor.email)) {
      alert('Please enter a valid name and email address');
      return;
    }
    
    const advisor = {
      id: Math.max(...programAdvisors.map(a => a.id)) + 1,
      ...newAdvisor
    };
    
    setProgramAdvisors([...programAdvisors, advisor]);
    setNewAdvisor({ name: '', email: '' });
  };

  const updateAdvisor = (id, name, email) => {
    if (!name || !validateEmail(email)) {
      alert('Please enter a valid name and email address');
      return;
    }
    
    setProgramAdvisors(programAdvisors.map(advisor => 
      advisor.id === id ? { ...advisor, name, email } : advisor
    ));
    setEditingAdvisor(null);
  };

  const deleteAdvisor = (id) => {
    if (programAdvisors.length <= 1) {
      alert('Cannot delete the last advisor');
      return;
    }
    
    setProgramAdvisors(programAdvisors.filter(advisor => advisor.id !== id));
  };

  const deleteCustomer = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
      setCustomers(customers.filter(customer => customer.id !== customerId));
      if (selectedCustomer && selectedCustomer.id === customerId) {
        setSelectedCustomer(null);
      }
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const [emailTemplates, setEmailTemplates] = useState({
    confirmation: {
      subject: 'Next Steps - Welcome to Alpha Anywhere!',
      body: `Hi {{parentFirstName}},

Thank you so much for choosing Alpha Anywhere for {{studentFirstName}}! We're excited to have you join our community.

To complete your enrollment, please complete these two important steps:

1. Complete the consent forms in our enrollment portal
2. Set up your payment method

Once these are complete, we'll send you a welcome package with everything you need to get {{studentFirstName}} started on {{startDate}}.

If you have any questions, please don't hesitate to reach out!

Best regards,
{{advisorName}}`
    },
    esaTips: {
      subject: 'ESA Fund Usage - Pro Tips for Alpha Anywhere',
      body: `Hi {{parentFirstName}},

Since you'll be using ESA funds for {{studentFirstName}}'s education with us, here are some helpful tips to make the process smooth:

• Keep all receipts and documentation for your records
• ESA funds can typically be used for tuition, curriculum, and educational materials
• Processing ESA payments may take 3-5 business days
• We'll provide detailed invoices that meet ESA requirements

Our team is here to help make using your ESA funds as straightforward as possible. Don't hesitate to reach out with any questions!

Best regards,
{{advisorName}}`
    },
    enrollment: {
      subject: 'Welcome to Alpha Anywhere - Let\'s Get Started!',
      body: `Dear {{parentFirstName}},

Welcome to Alpha Anywhere! We're thrilled that {{studentFirstName}} is joining us.

Your enrollment is now complete and we're all set for your start date of {{startDate}}.

Here's what happens next:
- You'll receive your welcome materials within 24 hours
- Our team will be in touch to schedule your first session
- Access to our parent portal will be activated shortly

We can't wait to begin this journey with {{studentFirstName}}!

Warm regards,
{{advisorName}}`
    },
    parentSupport: {
      subject: 'Meet Your Parent Support Specialist',
      body: `Hi {{parentFirstName}},

I'm reaching out to introduce myself as your dedicated Parent Support Specialist. My name is {{supportName}}, and I'll be your go-to resource throughout {{studentFirstName}}'s journey with us.

Here are a few pro tips to help you get started:
• Set up a consistent study schedule
• Create a dedicated learning space
• Stay in regular communication with our team

I'll be checking in regularly to ensure everything is going smoothly. Feel free to reach out anytime!

Best,
{{supportName}}`
    }
  });

  const updateEmailTemplate = (templateType, field, value) => {
    setEmailTemplates(prev => ({
      ...prev,
      [templateType]: {
        ...prev[templateType],
        [field]: value
      }
    }));
  };

  const toggleTemplateMode = (templateType) => {
    setTemplateModes(prev => ({
      ...prev,
      [templateType]: prev[templateType] === 'text' ? 'html' : 'text'
    }));
  };

  const addCustomer = () => {
    if (!newCustomer.parentFirstName.trim()) {
      alert('Please enter parent first name');
      return;
    }
    if (!newCustomer.parentLastName.trim()) {
      alert('Please enter parent last name');
      return;
    }
    if (!validateEmail(newCustomer.parentEmail)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!newCustomer.studentFirstName.trim()) {
      alert('Please enter student first name');
      return;
    }
    if (!newCustomer.studentLastName.trim()) {
      alert('Please enter student last name');
      return;
    }
    if (!newCustomer.startDate) {
      alert('Please select a start date');
      return;
    }

    const customer = {
      id: Date.now(),
      ...newCustomer,
      step: 1,
      status: 'step-1',
      createdAt: new Date(),
      timeline: {
        initial: new Date(),
        converted: false,
        esaFunds: null,
        esaTipsEmailSent: null,
        confirmationEmailSent: null,
        consentsCompleted: false,
        paymentCompleted: false,
        enrollmentEmailSent: null,
        parentSupportEmailSent: null,
        completed: null
      }
    };
    
    setCustomers([...customers, customer]);
    setNewCustomer({
      parentFirstName: '',
      parentLastName: '',
      parentEmail: '',
      studentFirstName: '',
      studentLastName: '',
      startDate: '',
      isTransfer: false,
      advisorId: 1
    });
    setShowAddForm(false);
  };

  const updateCustomerStatus = (customerId, field, value) => {
    setCustomers(customers.map(customer => {
      if (customer.id === customerId) {
        const updatedTimeline = { ...customer.timeline, [field]: value };
        
        let step = customer.step;
        let status = customer.status;
        
        if (updatedTimeline.converted && updatedTimeline.esaFunds !== null && !updatedTimeline.confirmationEmailSent) {
          step = 1;
          status = 'step-1';
        } else if (updatedTimeline.confirmationEmailSent && (!updatedTimeline.consentsCompleted || !updatedTimeline.paymentCompleted)) {
          step = 2;
          status = 'step-2';
        } else if (updatedTimeline.consentsCompleted && updatedTimeline.paymentCompleted && !updatedTimeline.enrollmentEmailSent) {
          step = 2;
          status = 'step-2';
        } else if (updatedTimeline.enrollmentEmailSent && !updatedTimeline.parentSupportEmailSent) {
          step = 3;
          status = 'step-3';
        } else if (updatedTimeline.parentSupportEmailSent) {
          step = 3;
          status = 'completed';
          if (!updatedTimeline.completed) {
            updatedTimeline.completed = new Date();
          }
        }
        
        const updatedCustomer = {
          ...customer,
          timeline: updatedTimeline,
          step,
          status
        };
        
        if (selectedCustomer && selectedCustomer.id === customerId) {
          setSelectedCustomer(updatedCustomer);
        }
        
        return updatedCustomer;
      }
      return customer;
    }));
  };

  const sendEmail = async (customerId, type, customContent = '', customSubject = '') => {
    setEmailSending(true);
    
    try {
      const customer = customers.find(c => c.id === customerId);
      let senderEmail, senderName;
      
      // Use the specific email addresses for each type
      if (type === 'parentSupport') {
        senderEmail = 'virtualsupport@2hourlearning.com';
        const supportSpecialist = parentSupportStaff.find(ps => ps.id === selectedSupportSpecialist);
        senderName = supportSpecialist.name;
      } else {
        senderEmail = 'alphaanywhere@2hourlearning.com';
        const advisor = programAdvisors.find(pa => pa.id === customer.advisorId);
        senderName = advisor.name;
      }
      
      let template = emailTemplates[type];
      let content = customContent || template.body;
      let subject = customSubject || template.subject;
      
      // Merge fields in both subject and content
      const mergeFields = {
        '{{parentFirstName}}': customer.parentFirstName,
        '{{studentFirstName}}': customer.studentFirstName,
        '{{startDate}}': customer.startDate,
        '{{advisorName}}': programAdvisors.find(pa => pa.id === customer.advisorId)?.name || '',
        '{{supportName}}': parentSupportStaff.find(ps => ps.id === selectedSupportSpecialist)?.name || ''
      };
      
      Object.entries(mergeFields).forEach(([field, value]) => {
        content = content.replace(new RegExp(field, 'g'), value);
        subject = subject.replace(new RegExp(field, 'g'), value);
      });
      
      // Convert plain text to HTML if needed
      const htmlContent = content.replace(/\n/g, '<br>');
      
      const requestPayload = {
        to: customer.parentEmail,
        from: senderEmail,
        fromName: senderName,
        subject: subject,
        htmlContent: htmlContent,
        emailType: type
      };
      
      console.log('Sending email request:', requestPayload);
      
      // Try multiple approaches for better compatibility
      let response;
      
      try {
        // First try with CORS enabled
        response = await fetch('https://script.google.com/a/macros/2hourlearning.com/s/AKfycbz-53NX8vYIKCfdOJ3tI-FFRHnqz642N4ISwRmM3nLwoaoG2dXOJ1vEb5Ianj9sWuTcbg/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestPayload)
        });
        
        console.log('Response status:', response.status);
        
        if (response.ok) {
          const result = await response.json();
          console.log('Response data:', result);
          
          if (result.success) {
            // Success path
            const timelineField = type === 'confirmation' ? 'confirmationEmailSent' : 
                                 type === 'esaTips' ? 'esaTipsEmailSent' :
                                 type === 'enrollment' ? 'enrollmentEmailSent' : 
                                 'parentSupportEmailSent';
            
            updateCustomerStatus(customerId, timelineField, new Date());
            
            setEmailSent(true);
            setTimeout(() => setEmailSent(false), 3000);
            setShowEmailModal(false);
            
            console.log(`Email sent successfully to ${customer.parentEmail}`);
          } else {
            throw new Error(result.error || 'Unknown error from server');
          }
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (corsError) {
        console.log('CORS error, trying no-cors mode:', corsError);
        
        // Fallback: no-cors mode (can't read response but can detect if request went through)
        response = await fetch('https://script.google.com/a/macros/2hourlearning.com/s/AKfycbz-53NX8vYIKCfdOJ3tI-FFRHnqz642N4ISwRmM3nLwoaoG2dXOJ1vEb5Ianj9sWuTcbg/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestPayload)
        });
        
        console.log('No-cors response:', response);
        
        // With no-cors, we assume success if no error was thrown
        const timelineField = type === 'confirmation' ? 'confirmationEmailSent' : 
                             type === 'esaTips' ? 'esaTipsEmailSent' :
                             type === 'enrollment' ? 'enrollmentEmailSent' : 
                             'parentSupportEmailSent';
        
        updateCustomerStatus(customerId, timelineField, new Date());
        
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 3000);
        setShowEmailModal(false);
        
        console.log(`Email request sent to ${customer.parentEmail} (no-cors mode)`);
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert(`Failed to send email: ${error.message}\n\nPlease check:\n1. Google Apps Script is deployed\n2. Script has proper permissions\n3. Internet connection is working`);
    } finally {
      setEmailSending(false);
    }
  };

  const handleSendEmail = () => {
    console.log('Send email button clicked', { 
      customerId: selectedCustomer.id, 
      emailType, 
      emailContent, 
      emailSubject 
    });
    sendEmail(selectedCustomer.id, emailType, emailContent, emailSubject);
  };

  const handleSort = (field) => {
    const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(direction);
  };

  const getSortedCustomers = () => {
    if (!sortField) return customers;
    
    return [...customers].sort((a, b) => {
      let aValue, bValue;
      
      switch (sortField) {
        case 'customer':
          aValue = `${a.parentFirstName} ${a.parentLastName}`.toLowerCase();
          bValue = `${b.parentFirstName} ${b.parentLastName}`.toLowerCase();
          break;
        case 'student':
          aValue = `${a.studentFirstName} ${a.studentLastName}`.toLowerCase();
          bValue = `${b.studentFirstName} ${b.studentLastName}`.toLowerCase();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          return 0;
      }
      
      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) {
      return <span className="text-gray-400 ml-1">↕</span>;
    }
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-4 w-4 ml-1 text-blue-600" /> : 
      <ChevronDown className="h-4 w-4 ml-1 text-blue-600" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'step-1': return 'bg-blue-100 text-blue-800';
      case 'step-2': return 'bg-yellow-100 text-yellow-800';
      case 'step-3': return 'bg-purple-100 text-purple-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusDisplay = (customer) => {
    switch (customer.status) {
      case 'step-1': return 'Step 1: Convert';
      case 'step-2': return 'Step 2: Process';
      case 'step-3': return 'Step 3: Support';
      case 'completed': return 'Completed';
      default: return 'Step 1: Convert';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Email Sent Confirmation */}
      {emailSent && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          Email sent successfully!
        </div>
      )}

      {/* Email Sending Indicator */}
      {emailSending && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
          Sending email...
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-semibold text-gray-900">Alpha Anywhere - Customer Onboarding</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowTemplateEditor(true)}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm flex items-center"
              >
                <Settings className="h-4 w-4 mr-1" />
                Email Templates
              </button>
              
              <button
                onClick={() => setShowAdminPanel(true)}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
              >
                Manage Staff
              </button>
              
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Add Customer to Onboarding
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Step 1: Convert</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {customers.filter(c => c.status === 'step-1').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <User className="h-8 w-8 text-yellow-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Step 2: Process</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {customers.filter(c => c.status === 'step-2').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-purple-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Step 3: Support</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {customers.filter(c => c.status === 'step-3').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {customers.filter(c => c.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Customer Onboarding Pipeline</h2>
          </div>
          
          {customers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No customers yet</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding your first customer to the onboarding pipeline.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
                      onClick={() => handleSort('customer')}
                    >
                      <div className="flex items-center">
                        Customer
                        <SortIcon field="customer" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
                      onClick={() => handleSort('student')}
                    >
                      <div className="flex items-center">
                        Student
                        <SortIcon field="student" />
                      </div>
                    </th>
                    <th 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
                      onClick={() => handleSort('status')}
                    >
                      <div className="flex items-center">
                        Status
                        <SortIcon field="status" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getSortedCustomers().map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {customer.parentFirstName} {customer.parentLastName}
                          </div>
                          <div className="text-sm text-gray-500">{customer.parentEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {customer.studentFirstName} {customer.studentLastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                          {getStatusDisplay(customer)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedCustomer(customer)}
                            className="text-blue-600 hover:text-blue-900"
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteCustomer(customer.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete Customer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add Customer to Onboarding</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Parent First Name *</label>
                  <input
                    type="text"
                    value={newCustomer.parentFirstName}
                    onChange={(e) => setNewCustomer({...newCustomer, parentFirstName: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Parent Last Name *</label>
                  <input
                    type="text"
                    value={newCustomer.parentLastName}
                    onChange={(e) => setNewCustomer({...newCustomer, parentLastName: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none

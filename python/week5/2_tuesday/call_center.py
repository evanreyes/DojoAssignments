class Call(object):
    def __init__(self, uuid, name, number, time, reason):
        self.uuid = uuid
        self.name = name
        self.number = number
        self.time = time
        self.reason = reason

    def display(self):
        print "Unique ID: " + str(self.uuid) + "\n" + "Caller Name: " + str(self.name) + "\n"+ "Caller Phone Number: " + str(self.number) + "\n"+ "Time of Call: " + str(self.time) + "\n"+ "Reason for Call: " + str(self.reason) + "\n"

call1 = Call(1, "Todd", "206-888-2252", "3:00am", "status update")
call2 = Call(2, "Randy", "425-507-3489", "2:50pm", "cancel order")
call3 = Call(3, "Jenny", "253-476-4378", "4:09pm", "complaint")
# call1.display()
# call2.display()
# call3.display()

class CallCenter(object):
    def __init__(self):
        self.callList = []
        self.queueSize = 0

    def add(self, *callList):
        for call in callList:
            self.callList.append(call)
            self.queueSize = len(self.callList)
        return self

    def remove(self):
        del self.callList[0]
        self.queueSize = len(self.callList)
        return self

    def removeByNumber(self, number):
        for i in self.callList:
            if i.number == number:
                self.callList.remove(i)
                self.queueSize = len(self.callList)
                print "Removed " + str(i.number) + " from call list. \n"
        return self


    def showQueue(self):
		print "Current Queue:"
		for call in self.callList:
			print "Caller Name: " + str(call.name) + "\n" + "Phone Number: " + str(call.number) + "\n"
		print "Calls in Queue: " + str(self.queueSize)

callLog = CallCenter()

callLog.add(call1).add(call2).add(call3).removeByNumber("425-507-3489").showQueue()

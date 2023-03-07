from bs4 import BeautifulSoup


with open("data/GeneralData/arthinice.xml") as fp:
    soup = BeautifulSoup(fp, 'xml')

#This will print the entire xml document
# print(soup.prettify())

# This finds the first instance of a POST tag and prints the string the BODY tag contains
# print(soup.POST.BODY.string)
# Use Find all to obtain a list containing all instances of POST tags
# print(soup.find_all('POST'))

posts = soup.find_all('POST')

sender_and_message = []
posters = []
#get the id of the perpetrator
predator_id = soup.PREDATOR.SCREENNAME.USERNAME.string
#and id of victim
victim_id = soup.VICTIM.SCREENNAME.USERNAME.string
#Iterate through the list and obtain a list of usernames and strings
for post in posts:
    poster = post.USERNAME.string
    if poster == predator_id:
        poster = "person1"
    elif poster == victim_id:
        poster = "person2"
    else:
        continue # there is no point in getting a message that is not from either the predator or
    message = post.BODY.string
    #Added this just in case there is no mesage
    message = message if message != None else "no message"
    sender_and_message.append([poster, message])

#Print out the messages
for val in sender_and_message:
    print(val[0] + " : " + val[1])



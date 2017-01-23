require 'open-uri'

# Open http://placekitten.com/ for reading on line 4!
kittens = open('http://placekitten.com')
body = kittens.read[559, 441]

# Add your puts statement below!
puts body

# ****************************************************
# example POST request
POST /codecademy/learn-http HTTP/1.1 # the request line
Host: www.codecademy.com # the header
Content-Type: text/html; charset=UTF-8

Name=Eric&Age=26 # the data to be posted

api_key = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9"

require 'open-uri'

placekitten = open('http://placekitten.com/')

# Add your code below!
puts placekitten.status

HTTP/1.1 200 OK
Content-Type: text/xml; charset=UTF-8

<?xml version="1.0" encoding="utf-8"?>
<string xmlns="https://www.codecademy.com/">Accepted</string>

#XML
require "rexml/document"

file = File.open("pets.txt")
doc = REXML::Document.new file
file.close

doc.elements.each("pets/pet/name") do |element|
  puts element
end

# JSON
require 'json'

pets = File.open("pets.txt", "r")

doc = ""
pets.each do |line|
  doc << line
end
pets.close

puts JSON.parse(doc)

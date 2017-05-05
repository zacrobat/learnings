# Ruby Notes - tryruby.org
# Ruby uses a fat arrow for responses to your entries.
# String properties: .reverse .length
# to_s converts values to strings.
# to_i converts values to integers (numbers.)
# to_a converts values to arrays.
 ticket = [12, 47, 35]
 ticket.sort! # [12, 35, 47] The ! at the end directly modifies the array instead of making a copy
poem.print
poem ['toast'] = 'honeydew' # only changes the first instance of the word 'toast' in the poem string.
# The [] around 'toast' target data.
poem.lines.to_a.reverse #chain some methods - turn the poem into a list (array), split by line, then reverse the array (lines). Bytes or chars can be used instead of lines . The join method took the list of reversed lines and put them into a single string, which is the same as to_s
# When you place a colon in front of a string you get a ruby symbol
{} # is a 'hash' or a 'dictionary.' Hashes store related information by giving reusable labels to pieces of data.
# Hashes store key/value pairs
books.keys # returns the keys
books.values.each { |rate| ratings[rate] += 1 } # turn all your unique VALUES in books into KEYS within the new ratingshash.
puts returns nil
** is "to the power of" # 3**2 => 9
Math is a built-in module for mathematics so Math.sqrt(9) => 3
def hi #starts the definition of a method named 'hi'
  puts "Hello World"
end # end of method.
